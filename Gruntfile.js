const webpackConfig = require('./webpack.config.js')

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt)
  // Project configuration.
  grunt.log.writeln(
    `grunt running webpack output`
  );

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'webpack-dev-server': {
      frontend: {
        webpack: webpackConfig,
      }
    },
    
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
      },
      prod: webpackConfig,
      dev: Object.assign({ watch: true }, webpackConfig)
    },
  
    // testing
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
  });

  

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-webpack');

  
  // load plugin for testing
  grunt.loadNpmTasks('grunt-karma')

  grunt.registerTask('dev', [
    'webpack-dev-server'
  ])

  grunt.registerTask('test', [
    // 'webpack',
    'karma',
  ])



  // Default task(s).
  grunt.registerTask('default', ['uglify']);


  
};