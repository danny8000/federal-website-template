module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    /**
     * Pull in the package.json file so we can read its metadata.
     */
    pkg: grunt.file.readJSON('package.json'),


    /* 
     * CONCAT
     * 
     * Combine vendor supplied CSS files
     * 
    */
    concat: {
      main: {
        src: [
          'bower_components/normalize-css/normalize.css',
          'bower_components/font-awesome/css/font-awesome.min.css'
        ],
        dest: 'assets/css/vendor.css',
      }
    },


    /**
     * LESS: https://github.com/gruntjs/grunt-contrib-less
     * 
     * Compile LESS files to CSS.
     * All of the cf-framework LESS files have been added to styles.css.
     */
    less: {
      main: {
        options: {
          paths: ['_assets/less'],
          compress: true,
          sourceMap: true,
          sourceMapFilename: 'assets/css/sourcemap.css.map'
        },
        files: {
          "assets/css/theme.min.css": ["_assets/less/theme.less"]
        }
      },
      blog: {
        options: {
          paths: ['_assets/less'],
          compress: true
        },
        files: {
          "assets/css/blog.min.css": ["_assets/less/blog.less"]
        }
      }
    },




    /**
     * Copy: https://github.com/gruntjs/grunt-contrib-copy
     */
    copy: {
      main: {
        files: [
          /* Vendor Packages */
          {
            expand: true,
            flatten: true,
            src: ['bower_components/bootstrap/dist/fonts/*'],
            dest: 'assets/fonts',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['bower_components/bootstrap/dist/css/bootstrap.min.css'],
            dest: 'assets/css',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['bower_components/bootstrap/dist/js/bootstrap.min.js'],
            dest: 'assets/js',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['bower_components/jquery/dist/jquery.min.js'],
            dest: 'assets/js',
            filter: 'isFile'
          }
        ]
      }
    },


    exec: {
      build: {
        cmd: 'jekyll build'
      },
      serve: {
        cmd: "jekyll serve --watch --baseurl ''"
      }
    },

    /**
     * watch javascript and less files for changes, when they change run the build command
    */
    watch: {
      scripts: {
        files: ['frontend/src/**/*.js','frontend/src/**/*.less'],
        tasks: ['build']
      }
    }



  }); /* end grunt.initConfig  */

  /**
   * The above tasks are loaded here (in the same order).
   */
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');

  /**
   * The 'default' task will run whenever `grunt` is run without specifying a task
   */
  grunt.registerTask('build', ['concat', 'less', 'copy']);
  grunt.registerTask('default', ['build']);

};