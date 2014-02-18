'use strict';

angular.module('mainApp')
  .controller('DragAndDropCtrl', function ($scope) {
        var data = [{name: "Moroni", age: 50},
            {name: "Tiancum", age: 43},
            {name: "ATest Null", age: null},
            {name: null, age: 44},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 36},
            {name: "Enos", age: 38},
            {name: "Enos", age: 37},
//            {name: "Enos", age: 36},
//            {name: "Tiancum", age: 43},
//            {name: "Jacob", age: 27},
//            {name: "Nephi", age: 29},
//            {name: "Enos", age: 34},
//            {name: "Tiancum", age: 43},
//            {name: "Jacob", age: 27},
//            {name: "Nephi", age: 29},
//            {name: "Enos", age: 34},
//            {name: "Tiancum", age: 43},
//            {name: "Jacob", age: 27},
//            {name: "Nephi", age: 29},
            {name: "Enos", age: 34}];

        $scope.data = data;

        $scope.dragOver = function(ev) {
            //console.log(ev);
            ev.dataTransfer.dropEffect = "copyMove";
        }

        $scope.dragEnter = function(ev) {
            console.log("Ctrl dragEnter -> ");
            console.log(ev);
            ev.target.className = 'interligne-drop-over';
        }

        $scope.dragLeave = function(ev) {
            console.log("Ctrl dragLeave -> ");
            console.log(ev);
            ev.target.className = 'interligne';
        }

        $scope.drop = function(value, ev) {
            ev.target.className = 'interligne';
            var indexOrig = $scope.data.indexOf(value);
            for(indexOrig=0;indexOrig<$scope.data.length; indexOrig++) {
                var curVal = $scope.data[indexOrig];
                if (value.name==curVal.name && value.age==curVal.age) {
                    break;
                }
            }
            console.log(angular.toJson($scope.data));
//            console.log(indexOrig + " -> " + angular.toJson($scope.data[indexOrig]));
            var indexDest = ev.target.attributes['drop-id'].value;
//            console.log(indexDest + " -> " + angular.toJson($scope.data[indexDest]));
            var value = $scope.data[indexOrig];
            if (indexDest<=indexOrig) {
                $scope.data.splice(indexOrig,1);
                $scope.data.splice(indexDest,0, value);
            } else {
                $scope.data.splice(indexDest,0, value);
                $scope.data.splice(indexOrig,1);
            }
            $scope.$apply();
//            console.log(angular.toJson($scope.data));
        }
  });
