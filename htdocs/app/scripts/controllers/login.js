'use strict';

angular.module('easydesignApp')
  .controller('LoginCtrl', ['$scope', 'LoginService', 'ErrorService',
    function($scope,LoginService,ErrorService){
      $scope.login = '';
      $scope.password = '';
      $scope.doLogin = function(){
        LoginService.login($scope.login,$scope.password,function(loggedin,actionName,code){
          if (loggedin) {
            $location.path('/dashboard');
          }else if(!validator.isNull(code)){
            ErrorService.getErrorMessage(code,actionName);
          }
        });
      }
    }]);
