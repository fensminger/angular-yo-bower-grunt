'use strict';

angular.module('nodeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
//        'ngGrid',
        'DragAndDrop' ,
//        'ngTable',
//        'ngTableExport',
        'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/test/ng-grid', {
        templateUrl: 'views/essai/ng-grid.html',
        controller: 'TestNgGridCtrl'
      })
      .when('/test-ngtable', {
        templateUrl: 'views/test-ngtable.html',
        controller: 'TestNgtableCtrl'
      })
      .when('/drag-and-drop', {
        templateUrl: 'views/drag-and-drop.html',
        controller: 'DragAndDropCtrl'
      })
      .when('/ckeditor', {
        templateUrl: 'views/ckeditor.html',
        controller: 'CkeditorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
