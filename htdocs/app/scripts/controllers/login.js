'use strict';

angular.module('easydesignApp')
  .controller('LoginCtrl', ['$scope', '$rootScope', '$location','LoginService', 'ErrorService',
    function($scope,$rootScope,$location,LoginService,ErrorService){
      if ($rootScope.logged_in) {
        $location.path('/dashboard');
      }else{
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
      }
    }]);