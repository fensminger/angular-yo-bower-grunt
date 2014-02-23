// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // preprocessors
    preprocessors: {
       'app/scripts/**/*.js': ['coverage']
    },

   // reporters: ['progress', 'junit'],

    // the default configuration
    //junitReporter: {
    //  outputFile: 'test-results.xml',
    //  suite: ''
    //},


	
    reporters: ['progress', 'junit', 'coverage'],
	// junit reporter configuration
	junitReporter: {
        outputFile: 'test/reporter/test-results.xml',
        suite: ''
    },

    // coverage configuration
    coverageReporter: {
        type : 'html',
        dir : 'test/coverage/'
    },


    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/ckeditor/ckeditor.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
      ,
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/ng-grid/ng-grid-2.0.8.debug.js',
      'app/scripts/libraries/ngdragndrop.js',
      'app/bower_components/angular-dragdrop/src/angular-dragdrop.js',
      'app/bower_components/ng-table/ng-table.js',
      'app/bower_components/ng-table-export/ng-table-export.js'
    ],



    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    //singleRun: false
    singleRun: true 


  });
};
