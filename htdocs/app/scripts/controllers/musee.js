'use strict';

angular.module('easydesignApp')
  .controller('MuseeModelCtrl', ['$scope','$http',
    function ($scope,$http) {
      $http.get('models/musee/pagemodels.json').success(function(data){
        $scope.pages = data;
      });

       $scope.orderProp = 'id';
    }]);

angular.module('easydesignApp')
  .controller('MuseePageCtrl', ['$scope', '$http','$routeParams',
    function($scope,$http,$routeParams){
      $http.get('models/musee/'+$routeParams.pageName+'.json').success(function(data){
        $scope.page = data;

      });
      //$scope.pageName = $routeParams.pageName;
    }]);
