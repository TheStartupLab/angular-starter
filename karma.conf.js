//karma config
module.exports = function(config) {

  var webpackConfig = require('./config/webpack.test.js')({ env: 'test' });

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    

    files: [
      { pattern: './config/spec-bundle.js', watched: false },
    ],

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },
    /*
     * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: { './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },

    coverageReporter: {
      type: 'in-memory'
    },

     /*
     * available reporters: https://npmjs.org/browse/keyword/karma-reporter
     */
      reporters: ['coverage', 'mocha', 'remap-coverage'],

      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,

    /*
    * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    */
      browsers: [
        'Chrome'
      ]
  
  });
};