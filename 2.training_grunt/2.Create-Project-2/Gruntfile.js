module.exports = function(grunt) {

  // 01 Config
  grunt.initConfig({
    mPkg: grunt.file.readJSON('package.json'),
  });

  // 02 Load plugin

  // 03 Register task
  grunt.registerTask('default', []);
  grunt.registerTask('log', 'Log some stuff.', function() {
      grunt.log.write('Logging some stuff...').ok();
  });
};