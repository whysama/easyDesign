'use strict';

/**
 * @ngdoc function
 * @name easydesignApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the easydesignApp
 */
angular.module('easydesignApp')
  .controller('MainCtrl', ['$scope','$rootScope' ,'$location', '$window', 'LoginService', 'ErrorService',
    function($scope,$rootScope,$location,LoginService,ErrorService){
      if ($rootScope.logged_in) {
        $location.path('/dashboard');
      }else{
        if (!validator.isNull($rootScope.current_user)) {
          $rootScope.doLogout();
        }
      }
    }]);

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