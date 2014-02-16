'use strict';

angular.module('mainApp')
  .controller('TestNgtableCtrl', function ($scope, $filter, ngTableParams) {
        var data = [{name: "Moroni", age: 50},
            {name: "Tiancum", age: 43},
            {name: "ATest Null", age: null},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 36},
            {name: "Enos", age: 38},
            {name: "Enos", age: 37},
            {name: "Enos", age: 36},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34}];

        $scope.data = data;

        $scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 100,          // count per page
            filter: {
                name: '',
                age : ''// initial filter
            },
            sorting: {
                name: 'asc'
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                console.log(params.filter());
                var realFilter = {};
                if (params.filter().name != "") {
                    realFilter.name = params.filter().name;
                }
                if (params.filter().age != "") {
                    realFilter.age = params.filter().age;
                }
                if (params.filter().ageNull) {
                    realFilter.age = "!";
                }
                var filteredData = params.filter() ?
                    $filter('filter')(data, realFilter) :
                    data;
                var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    data;

                $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                params.total(orderedData.length); // set total for recalc pagination
                $defer.resolve($scope.users);
            }
        });

        var i = 0;
        $scope.addData = function() {
            var nb = 0;
            for (nb = 0; nb < 10000; nb++) {
                data.push({
                    name :'Test', age : i++
                });
            }
            $scope.tableParams.reload();
        }

        $scope.changeSelection = function(user) {
            console.info(user);
        }


    });
