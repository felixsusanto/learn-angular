// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function(grunt) {
 
  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
  // Configure Grunt 
  grunt.initConfig({
 
    // grunt-express will serve the files from the folders listed in `bases`
    // on specified `port` and `hostname`
    express: {
      ex_1: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: ['single-site'], // Replace with the directory you want the files served from
                             // Make sure you don't use `.` or `..` in the path as Express
                             // is likely to return 403 Forbidden responses if you do
                             // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
          livereload: true
        }
      },
      ex_2: {
        options: {
          port: 9001,
          hostname: "0.0.0.0",
          bases: ['sports-feed'],
          livereload: true
        }
      }
    },

    //grunt-watch will monitor the project files
    watch: {
      view_ex_1: {
        // Replace with whatever file you want to trigger the update from
        // Either as a String for a single entry 
        // or an Array of String for multiple entries
        // You can use globing patterns like `css/**/*.css`
        // See https://github.com/gruntjs/grunt-contrib-watch#files
        files: ['single-site/*.html'],
        options: {
          livereload: true
        }
      },
      view_ex_2: {
        files: ['sports-feed/*.html', 'sports-feed/**/*.js'],
        options: {
          livereload: true
        }
      }
    },
    // grunt-open will open your browser at the project's URL
    open: {
      ex_1: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.ex_1.options.port%>'
      },
      ex_2: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.ex_2.options.port%>'
      }
    }
  });
 
  // Creates the `server` task
  grunt.registerTask('server', [
    'express:ex_1',
    'open:ex_1',
    'watch:view_ex_1'
  ]);

  grunt.registerTask('server-ex2', [
    'express:ex_2',
    'open:ex_2',
    'watch:view_ex_2'
  ]);

};