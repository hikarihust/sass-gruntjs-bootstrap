module.exports = function(grunt) {

    // 01 Config
    grunt.initConfig({
        mPkg: grunt.file.readJSON('package.json'),

		dirs: {
			inputCSS	: 'development/css',
			outputCSS	: 'production/css',
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
    });
  
    // 02 Load plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 03 Register task
    grunt.registerTask('default', ['cssmin']);
    grunt.registerTask('abc', ['cssmin']);
  };