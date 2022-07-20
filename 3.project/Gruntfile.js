module.exports = function(grunt) {

    // 01 Config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		dirs: {
			inputSCSS	: 'development/sass',
            inputJS		: 'development/js',
            inputHTMLELements	: 'development/html-elements',
			outputCSS	: 'production/css',
            outputJS	: 'production/js',
		},

        // CSSMin
        cssmin: {
            options: {
            },
            target: {
                files: [{
                }]
            }
        },

        // Uglify
		uglify: {
			options: {
				beautify: false,
				compress: {
					drop_console: true
				}
			},
			my_target: {
		  		files: {
					'<%= dirs.outputJS %>/menu.js': ['<%= dirs.inputJS %>/menu.js']
		  		}
			}
        },

		// SASS
		sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'expanded',
                },
                files: {
                    '<%= dirs.outputCSS %>/main.css': '<%= dirs.inputSCSS %>/main.scss'
                }
            }
		},

		// WATCH
		watch: {
			scripts: {
				files: [
					'<%= dirs.inputSCSS %>/*.scss',				// development/sass/*.scss
                    '<%= dirs.inputSCSS %>/*/*.scss',			// development/sass/*/*.scss
					'<%= dirs.inputJS %>/*.js',
                    'development/index.html',
                    '<%= dirs.inputHTMLELements %>/*.html',		// development/html-elements/*.html
				],
				tasks: [
					'sass',
					'includes'
				],
				options: {
					spawn: false,
                    livereload: true
				},
			},
		},

		// CONNECT
		connect: {
			server: {
					options: {
						hostname: 'localhost',
						port: 3069,
						base: 'production/',
						livereload: true
					}
			}
		},

		// INCLUDES
		includes: {
			files: {
				src: [
					'development/index.html'
				], // Source files 
				dest: 'production/', // Destination directory 
				flatten: true, 
				cwd: '.',
				options: {
					silent: true,
					banner: ''
				}
			}
		},

    });
  
    // 02 Load plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-includes');

    // 03 Register task
	grunt.registerTask('default', 'Log some stuff.', function() {
		grunt.log.write('Logging some stuff...').ok();
    });

	// Task Developer
	grunt.registerTask('dev', [
		'includes',
		'sass',
		'uglify',
		'connect',
		'watch',
    ]);

	// Task Publish Project
	grunt.registerTask('publish', [
		'cssmin',
		'uglify'
	]);
  };