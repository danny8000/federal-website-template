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
     * Combine vendor supplied files
     * 
    */
    concat: {
      vendor: {
        src: [
          'bower_components/html5-boilerplate/css/main.css',
          'bower_components/font-awesome/css/font-awesome.min.css'
        ],
        dest: 'assets/css/vendor.css'
      },
      ielt9: {
        src: [
          'bower_components/html5shiv/dist/html5shiv.min.js',
          'bower_components/respond/dest/respond.min.js'
        ],
        dest: 'assets/js/ielt9.js'
      }
    },


    /**
     * LESS: https://github.com/gruntjs/grunt-contrib-less
     * 
     * Compile LESS files to CSS.
     * All of the cf-framework LESS files have been added to styles.css.
     */
    less: {
      bootstrap: {
        options: {
          paths: ['_assets/less'],
          compress: false,
          sourceMap: true,
          sourceMapFilename: 'assets/css/assets/css/federal_website_template.sourcemap.css.map',
          sourceMapURL: '/assets/css/federal_website_template.sourcemap.css.map'
        },
        files: {
          "assets/css/federal_website_template.min.css": ["_assets/less/bootstrap.less"]
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
          },
          {
            expand: true,
            flatten: true,
            src: ['bower_components/font-awesome/fonts/*'],
            dest: 'assets/fonts',
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