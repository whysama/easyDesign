'use strict';

angular.module('easydesignApp')
  .controller('ModelCtrl', ['$rootScope','$scope', '$location', '$http', '$routeParams', 'ErrorService',
    function($rootScope,$scope,$location,$http,$routeParams,ErrorService){
      var id_model = $routeParams.id_model;
      
      if (validator.isNull($scope.patterns) && validator.isNumeric(id_model)) {
        $scope.action = "list";
        $http.post('../php/Model/getPatterns.json?','id_model='+id_model)
            .success(function(data){
              $scope.patterns = data.response;
            })
            .error(function(data){
              $location.path("/dashboard");
            });
      }else{
        switch(id_model) {
          case "new":
            $scope.action = "new";
            break;
        }
      }
    }]);

angular.module('easydesignApp')
  .controller('PatternCtrl', ['$rootScope','$scope', '$location', '$http', '$routeParams', 'ErrorService', 'ComponentService',
    function($rootScope,$scope,$location,$http,$routeParams,ErrorService,ComponentService){
      ComponentService.getAllComponents(function(data){
        console.log(data);
      });
    }]);