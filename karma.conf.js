// Karma configuration
/*eslint-env commonjs */

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // NEED TO PUT CHAI AFTER REQUIREJS
    frameworks: ['browserify', 'mocha', 'requirejs', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'test-main.js',
      {pattern: 'tests/*', included: false}
    ],


    // list of files to exclude
    exclude: [
      '*.swp'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/*.js': [ 'browserify' ]
    },

    browserify: {
      debug: true,
      transform: [ ['babelify', {'presets': ['react', 'es2015']}]],
      extensions: ['.js', '.jsx']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    browserNoActivityTimeout: 1000000,
    captureTimeout: 5000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  });
};
