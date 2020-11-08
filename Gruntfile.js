// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
const sass = require('node-sass');

module.exports = function (grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
    // configure jshint to validate js files -----------------------------------
    // jshint: {
    //   options: {
    //     reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
    // },

    // when this task is run, lint the Gruntfile and all js files in src
    // build: ['Gruntfile.js', 'src/**/*.js']
    // },


    // // configure uglify to minify js files -------------------------------------
    // uglify: {
    //   options: {
    //     banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
    //   },
    //   build: {
    //     files: {
    //       'dist/js/magic.min.js': 'src/js/magic.js'
    //     }
    //   }
    // },


    // // compile less stylesheets to css -----------------------------------------
    // less: {
    //   build: {
    //     files: {
    //       'dist/css/pretty.css': 'src/css/pretty.less'
    //     }
    //   }
    // },

    // // configure cssmin to minify css files ------------------------------------
    // cssmin: {
    //   options: {
    //     banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
    //   },
    //   build: {
    //     files: {
    //       'dist/css/style.min.css': 'src/css/style.css'
    //     }
    //   }
    // },

    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dest: {
        files: {
          'dest/css/style.css': 'src/css/style.scss',
          'dest/css/anasayfa.css': 'src/css/anasayfa.scss',
          'dest/css/order.css': 'src/css/order.scss',
          'dest/css/sale.css': 'src/css/sale.scss',
          'dest/css/ilan.css': 'src/css/ilan.scss',
          'dest/css/portfolyom.css': 'src/css/portfolyom.scss',
          'dest/css/jobs_for_you.css': 'src/css/jobs_for_you.scss',
          'dest/css/place_order.css': 'src/css/place_order.scss',
          'dest/css/my_orders.css': 'src/css/my_orders.scss',
          'dest/css/my_profile.css': 'src/css/my_profile.scss',
          'dest/css/my_account.css': 'src/css/my_account.scss',
          'dest/css/uyelik.css': 'src/css/uyelik.scss',
          'dest/css/security.css': 'src/css/security.scss',
          'dest/css/payment_information.css': 'src/css/payment_information.scss',
          'dest/css/bildirimler.css': 'src/css/bildirimler.scss',
          'dest/css/kayit1.css': 'src/css/kayit1.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        // We need to `freeze` browsers versions for testing purposes.
        browsers: ['opera 12', 'ff 15', 'chrome 25']
      },

      dist: {
        files: {
          'dest/css/style.css': 'dest/css/style.css',
          'dest/css/anasayfa.css': 'dest/css/anasayfa.css',
          'dest/css/order.css': 'dest/css/order.css',
          'dest/css/sale.css': 'dest/css/sale.css',
          'dest/css/ilan.css': 'dest/css/ilan.css',
          'dest/css/portfolyom.css': 'dest/css/portfolyom.css',
          'dest/css/jobs_for_you.css': 'dest/css/jobs_for_you.css',
          'dest/css/place_order.css': 'dest/css/place_order.css',
          'dest/css/my_orders.css': 'dest/css/my_orders.css',
          'dest/css/my_profile.css': 'dest/css/my_profile.css',
          'dest/css/my_account.css': 'dest/css/my_account.css',
          'dest/css/uyelik.css': 'dest/css/uyelik.css',
          'dest/css/security.css': 'dest/css/security.css',
          'dest/css/payment_information.css': 'dest/css/payment_information.css',
          'dest/css/bildirimler.css': 'dest/css/bildirimler.css',
          'dest/css/kayit1.css': 'dest/css/kayit1.css'
        }
      }
    },

    // configure watch to auto update ----------------
    watch: {
      // for stylesheets, watch css and less files 
      // only run less and cssmin stylesheets: 
      stylesheets: {
        files: ['src/**/*.css', 'src/**/*.scss'],
        tasks: ['sass', 'autoprefixer']
      },

      // // for scripts, run jshint and uglify 
      // js: { 
      //   files: ['src/**/*.js'], 
      //   tasks: ['jshint', 'uglify'],
      // },

    }

  });


  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  // grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'less', 'sass']);
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};