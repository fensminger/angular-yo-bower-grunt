// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    reporters: ['progress', 'junit'],

    // the default configuration
    junitReporter: {
      outputFile: 'test-results.xml',
      suite: ''
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


   /*

    <script src="bower_components/jquery-ui/ui/minified/jquery-ui.min.js"></script>
        <script src="bower_components/angular/angular.js"></script>
        <script src="bower_components/angular-dragdrop/src/angular-dragdrop.js"></script>

        <!-- build:js scripts/plugins.js -->
        <script src="bower_components/sass-bootstrap/js/affix.js"></script>
        <script src="bower_components/sass-bootstrap/js/alert.js"></script>
        <script src="bower_components/sass-bootstrap/js/button.js"></script>
        <script src="bower_components/sass-bootstrap/js/carousel.js"></script>
        <script src="bower_components/sass-bootstrap/js/transition.js"></script>
        <script src="bower_components/sass-bootstrap/js/collapse.js"></script>
        <script src="bower_components/sass-bootstrap/js/dropdown.js"></script>
        <script src="bower_components/sass-bootstrap/js/modal.js"></script>
        <script src="bower_components/sass-bootstrap/js/scrollspy.js"></script>
        <script src="bower_components/sass-bootstrap/js/tab.js"></script>
        <script src="bower_components/sass-bootstrap/js/tooltip.js"></script>
        <script src="bower_components/sass-bootstrap/js/popover.js"></script>
        <!-- endbuild -->

        <!-- build:js scripts/modules.js -->
        <script src="bower_components/angular-resource/angular-resource.js"></script>
        <script src="bower_components/angular-cookies/angular-cookies.js"></script>
        <script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
        <script src="bower_components/angular-route/angular-route.js"></script>
        <!-- endbuild -->

        <script src="bower_components/ckeditor/ckeditor.js"></script>
        <script src="bower_components/ng-table/ng-table.js"></script>
        <script src="bower_components/ng-table-export/ng-table-export.js"></script>
        <script src="scripts/libraries/ngdragndrop.js"></script>
       */





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

    //reporters = ['dots', 'junit'],
    //junitReporter = {
    //    outputFile: 'test-results.xml'
    //}

  });
};
