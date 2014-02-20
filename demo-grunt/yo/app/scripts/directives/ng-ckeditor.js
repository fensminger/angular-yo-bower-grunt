'use strict';

angular.module('nodeApp')
  .directive('ngCkeditor', function () {
        return {
            restrict: 'A', // only activate on element attribute
            scope: false,
            require: 'ngModel',
            controller: function($scope, $element, $attrs) {}, //open for now
            link: function($scope, element, attr, ngModel, ngModelCtrl) {
                if(!ngModel) return; // do nothing if no ng-model you might want to remove this
//                element.bind('click', function(){
                    for(var name in CKEDITOR.instances) {
                        try {
                            CKEDITOR.instances[name].destroy();
                        } catch (e) {}
                    }
                    var ck = CKEDITOR.replace(element[0]);
                    ck.on('instanceReady', function() {
                        ck.setData(ngModel.$viewValue);
                    });
                    ck.on('pasteState', function() {
                        $scope.$apply(function() {
                            ngModel.$setViewValue(ck.getData());
                        });
                    });
                    ngModel.$render = function(value) {
                        ck.setData(ngModel.$viewValue);
                    };
//                });
            }
        }
});
