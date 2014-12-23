'use strict';

/**
 * @ngdoc function
 * @name easydesignApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the easydesignApp
 */
angular.module('easydesignApp')
  .controller('MainCtrl', ['$scope','$rootScope' ,'$location','LoginService', 'ErrorService',
    function($scope,$rootScope,$location,LoginService,ErrorService){
      if ($rootScope.logged_in) {
        $location.path('/dashboard');
      }else{
        $rootScope.doLogout();
      }
    }]);
