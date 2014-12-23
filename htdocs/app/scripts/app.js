'use strict';

/**
 * @ngdoc overview
 * @name easydesignApp
 * @description
 * # easydesignApp
 *
 * Main module of the application.
 */
var app = angular
  .module('easydesignApp', [
    'ngResource',
    'ngRoute',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider',function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('easyls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/model/:id_model', {
        templateUrl: 'views/model.html',
        controller: 'ModelCtrl'
      })
      .when('/model/:id_model/pattern/:id_pattern', {
        templateUrl: 'views/pattern.html',
        controller: 'ModelCtrl'
      })
      .when('/musee', {
        templateUrl: 'views/musee.html',
        controller: 'MuseeModelCtrl'
      })
      .when('/musee/:pageName', {
        templateUrl: 'views/musee-page.html',
        controller: 'MuseePageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.run(['$route','$rootScope','$location','$window','LoginService', function($route,$rootScope,$location,$window,LoginService){
    $rootScope.current_user = (validator.isNull($window.sessionStorage["userInfo"]))? null : JSON.parse($window.sessionStorage["userInfo"]);
    $rootScope.logged_in = (validator.isNull($rootScope.current_user))? false : true;
    if (!$rootScope.logged_in) {
      $location.path('/');
    }

    $rootScope.doLogout = function(){
      LoginService.logout(function(loggedout,actionName,code){
        if (loggedout) {
          $location.path('/');
        }else if(!validator.isNull(code)){
          ErrorService.getErrorMessage(actionName,code);
        }else{
          ErrorService.getErrorMessage(actionName);
        }
      });
    }
}])