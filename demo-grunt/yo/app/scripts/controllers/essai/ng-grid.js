'use strict';

angular.module('nodeApp')
  .controller('TestNgGridCtrl', function ($scope) {
        $scope.ckvalue = "<b>Bold : </b>Test";
        $scope.nggridList = [];

        var i;
        for(i=0;i<100000;i++) {
            $scope.nggridList.push({
                id : i,
                libelle : "Voici un très long libellé qu'il faut remplir -> " + i,
                code : 'code' + i,
                val1 : "Valeur 1 ->> " + i,
                val2 : "Valeur 2 -->>>" + i,
                val3 : "Valeur 3 ---------->>>>>>>>>>>> " + i
            });
        };

        $scope.gridOptions = {
            data: 'nggridList',
            showGroupPanel: true,
            showFilter : true,
            columnDefs: [{field: 'id', displayName: 'Identifiant'},
                {field:'libelle', displayName:'Libellé', cellTemplate: '<div ng-class="{green: row.getProperty(col.field) > 30}">' +
                    '<div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'},
                {field: 'code', displayName: 'code'},
                {field: 'val1', displayName: 'Valeur 1'},
                {field: 'val2', displayName: 'Valeur 2'},
                {field: 'val3', displayName: 'Valeur 3'}
            ]
        };

  });
