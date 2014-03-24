'use strict';

angular.module('nodeApp')
  .controller('TreeTableCtrl', function ($scope, $window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.values = [
        ];

        $scope.bigvalues = [
        ];

//        for(var i =0; i<200; i++) {
//            $scope.values[i] = i + 'Test ======================================================= : ' +i;
//        }

        for(var i =0; i<50000; i++) {
            $scope.bigvalues[i] = {
                col1 : i,
                lib : 'Test ======================================================= : ' +i,
                lib2 : 'Lib 22 -------------------------------------------------- : ' +i
            };
        }

        var leftScrollHtml = document.getElementById('leftScroll');
        var leftEltScroll = angular.element(leftScrollHtml);

        var scrollHtml = document.getElementById('scroll');
        var eltScroll = angular.element(scrollHtml);

        eltScroll.bind('scroll', function(evt) {
            console.log(eltScroll.prop('scrollTop'));
            console.log(leftEltScroll.prop('scrollTop'));
            leftEltScroll.prop('scrollTop', eltScroll.prop('scrollTop'));
        });


        $scope.$on('virtual-scroll', function (event, evt) {
            $('#treeHeader').scrollLeft(evt.target.scrollLeft);
            console.log("Header Receive event - " + evt.target.scrollLeft);
        });

    });
