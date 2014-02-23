'use strict';

angular.module('nodeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.classHome = 'active';
        $scope.classContact = '';


        $scope.click = function(action) {
            if (action=="home") {
                $scope.classHome = 'active';
                $scope.classContact = '';
            } else if (action == "contact") {
                $scope.classHome = '';
                $scope.classContact = 'active';
            }
        }

        $scope.nextCarousel = function() {
            $('.carousel').carousel('next');
        };
        $scope.prevCarousel = function() {
            $('.carousel').carousel('prev');
        };

        $scope.list1 = [
            { 'title': 'L', 'drag': true },
            { 'title': 'O', 'drag': true },
            { 'title': 'M', 'drag': true },
            { 'title': 'L', 'drag': true },
            { 'title': 'G', 'drag': true },
            { 'title': 'U', 'drag': true }
        ];

        this.dropCallback = function(event, ui, title, $index) {
            if ($scope.list1.map(function(item) { return item.title; }).join('') === 'GOLLUM') {
                $scope.list1.forEach(function(value, key) { $scope.list1[key].drag = false; });
            }
        };

  });
