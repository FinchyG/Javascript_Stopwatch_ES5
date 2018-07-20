module.exports = function(grunt) { //eslint-disable-line
    
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        uglify: {
          options: {
            mangle: false
          },
          my_target: {
            files: {
              'stopwatch.min.js': ['stopwatch.js']
            }
          }
        },

        cssmin: {
          target: {
            files: {
              'stopwatch.min.css': ['stopwatch.css']
            }
          }
        }
      });

      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-cssmin');

      grunt.registerTask('default', [ 'uglify', 'cssmin']);
      
};