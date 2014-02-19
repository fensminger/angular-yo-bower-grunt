'use strict';

angular.module('mainApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
        'ngGrid',
        'ngDragDrop' ,
        'ngTable',
        'ngTableExport',
        'DragAndDrop'
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
      .otherwise({
        redirectTo: '/'
      });
  });
