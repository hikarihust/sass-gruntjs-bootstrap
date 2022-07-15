module.exports = function(grunt) {

    // 01 Config
    grunt.initConfig({
        mPkg: grunt.file.readJSON('package.json'),

		dirs: {
			inputCSS	: 'development/css',
			outputCSS	: 'production/css',
            inputJS		: 'development/js',
            outputJS	: 'production/js',
		},

        // CSSMin
        cssmin: {
            options: {
            },
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= dirs.inputCSS %>',
                    src: ['case-01.css', 'case-02.css'],
                    dest: '<%= dirs.outputCSS %>',
                    ext: '.min.css'
                }]
            }
        },

        // Concat
        concat: {
            options: {
                separator: '\n',
				stripBanners: false,
      			banner: '/*! <%= mPkg.name %> - ' +
       					'<%= grunt.template.today("yyyy-mm-dd") %> */' + '\n', 
            },
            dist: {
				src: [
					'<%= dirs.inputJS %>/case-01.js', 
					'<%= dirs.inputJS %>/case-02.js', 
				],
				dest: '<%= dirs.outputJS %>/result.js',
            },
        },

    });
  
    // 02 Load plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 03 Register task
    grunt.registerTask('default', ['cssmin']);
    grunt.registerTask('abc', ['cssmin', 'concat']);
  };