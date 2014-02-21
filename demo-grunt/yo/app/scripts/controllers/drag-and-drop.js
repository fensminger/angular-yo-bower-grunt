'use strict';

angular.module('nodeApp')
  .controller('DragAndDropCtrl', function ($scope) {
        var data = [{name: "Moroni", numberOfPizza: 5},
            {name: "Tiancum", numberOfPizza: 4},
            {name: "Jacob", numberOfPizza: 2},
            {name: "Nephi", numberOfPizza: 3},
            {name: "Enos", numberOfPizza: 3},
//            {name: "Enos", numberOfPizza: 37},
//            {name: "Enos", numberOfPizza: 36},
//            {name: "Tiancum", numberOfPizza: 43},
//            {name: "Jacob", numberOfPizza: 27},
//            {name: "Nephi", numberOfPizza: 29},
//            {name: "Enos", numberOfPizza: 34},
//            {name: "Tiancum", numberOfPizza: 43},
//            {name: "Jacob", numberOfPizza: 27},
//            {name: "Nephi", numberOfPizza: 29},
//            {name: "Enos", numberOfPizza: 34},
//            {name: "Tiancum", numberOfPizza: 43},
//            {name: "Jacob", numberOfPizza: 27},
//            {name: "Nephi", numberOfPizza: 29},
            {name: "Enos", numberOfPizza: 7}];
        
        $scope.numberOfPizza = 0;

        for(var i = 0; i< data.length; i++) {
            data[i].id = i;
            if (data[i].numberOfPizza!=null) {
                $scope.numberOfPizza += data[i].numberOfPizza;
            }
        }

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

        $scope.dragEnd = function(ev) {
            resetDropZone(ev);
            console.log("End drag.");
        }

        var resetDropZone = function(ev) {
            var listDragObj = ev.target.parentNode.parentNode.children;
            for(var i = 0; i < listDragObj.length; i++) {
                var eltDragDone = listDragObj[i].children[1];
                angular.element(eltDragDone).removeClass('interligne-drop-over');
                angular.element(eltDragDone).addClass('interligne');
            }
            var firstDragObj = ev.target.parentNode.parentNode.previousElementSibling;
            var eltFirstDragObj = angular.element(firstDragObj);
            eltFirstDragObj.removeClass('interligne-drop-over');
            eltFirstDragObj.addClass('interligne');
        };

        $scope.dragMainEnter = function(ev) {
            console.log("Main dragMainEnter -> ");
            console.log(ev);
//            var mouseDistanceFromTop = ev.target.getBoundingClientRect().top - ev.y;
//            var heightBox = ev.target.getBoundingClientRect().height;

            try {
                var eltDragOver = ev.target.parentNode.previousElementSibling.children[1];
                angular.element(eltDragOver).removeClass('interligne');
                angular.element(eltDragOver).addClass('interligne-drop-over');
            } catch (e) {
                var firstDragObj = ev.target.parentNode.parentNode.previousElementSibling;
                var eltFirstDragObj = angular.element(firstDragObj);
                eltFirstDragObj.removeClass('interligne');
                eltFirstDragObj.addClass('interligne-drop-over');
            }
        }

        $scope.dragMainLeave = function(ev) {
            console.log("Main dragLeave -> ");
            console.log(ev);
        }

        $scope.findIndex = function(value) {
            for(var indexOrig=0;indexOrig<$scope.data.length; indexOrig++) {
                var curVal = $scope.data[indexOrig];
                if (value.id==curVal.id) {
                    return indexOrig;
                }
            }

            return 0;
        }

        $scope.drop = function(value, ev) {
            ev.target.className = 'interligne';
            var indexOrig = $scope.findIndex(value);
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

        $scope.addPizza = function(value) {
            value.numberOfPizza += 1;
            $scope.numberOfPizza += 1;
        }

        $scope.removePizza = function(value) {
            $scope.numberOfPizza -= value.numberOfPizza;
            var indexOrig = $scope.findIndex(value);
            $scope.data.splice(indexOrig,1);
        }

        $scope.addNewPizza = function() {
            $scope.data.push({name : $scope.newPizzaName, numberOfPizza:0});
            $scope.newPizzaName = null;
        }

        $scope.subPizza = function(value) {
            if (value.numberOfPizza>0) {
                value.numberOfPizza -= 1;
                $scope.numberOfPizza -= 1;
            }
        }
  });
