'use strict';

angular.module('easydesignApp')
  .controller('DashboardCtrl', ['$scope', '$location', 'ErrorService',
    function($scope,$location,LoginService,ErrorService){
      $scope.login = '';
      $scope.password = '';
      $scope.doLogin = function(){
        LoginService.login($scope.login,$scope.password,function(loggedin,actionName,code){
          if (loggedin) {
            $location.path('/dashboard');
          }else if(!validator.isNull(code)){
            ErrorService.getErrorMessage(actionName,code);
          }else{
            ErrorService.getErrorMessage(actionName);
          }
        });
      }
    }]);
