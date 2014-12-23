'use strict';

angular.module('easydesignApp')
  .controller('ModelCtrl', ['$rootScope','$scope', '$location', '$http', '$routeParams', 'ErrorService',
    function($rootScope,$scope,$location,$http,$routeParams,ErrorService){
      $scope.id_model = $routeParams.id_model;
      
      if (validator.isNull($scope.patterns) && validator.isNumeric($scope.id_model)) {
        $http.post('../php/Model/getPatterns.json?','id_model='+$scope.id_model)
            .success(function(data){
              $scope.patterns = data.response;
            })
            .error(function(data){
              $location.path("/dashboard");
            });
      }

      

    }]);