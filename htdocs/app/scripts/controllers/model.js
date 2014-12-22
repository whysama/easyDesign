'use strict';

angular.module('easydesignApp')
  .controller('ModelCtrl', ['$rootScope','$scope', '$location', '$http', '$routeParams', 'ErrorService',
    function($rootScope,$scope,$location,$http,$routeParams,ErrorService){
      $scope.id_model = $routeParams.id_model;
      if (validator.isNumeric($scope.id_model)) {
        $http.post('../php/Model/getPatterns.json?','id_model='+$scope.id_model)
            .success(function(data){
              console.log(data);
            })
            .error(function(data){
              return callback(false,actionName);
            });
      }
    }]);