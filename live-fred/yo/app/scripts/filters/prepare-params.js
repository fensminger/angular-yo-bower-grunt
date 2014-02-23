'use strict';

angular.module('nodeApp')
    .filter('prepareParams', function () {
        function endsWith(str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        }

        return function (input) {
            var res = {};
            for (var index in input) {
                if (!endsWith(index, "Null")) {
                    var val = input[index];
                    var valNull = input[index + "Null"];
                    if (valNull) {
                        res[index] = "!";
                    } else {
                        if (val != null && val != '') {
                            res[index] = val;
                        }
                    }
                }
            }
            return res;
        };
    });
