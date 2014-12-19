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
    'ngRoute'
  ])
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

app.run(['$route','$rootScope','$location', function($route,$rootScope,$location){
  $rootScope.id_user = null;
  $rootScope.user_type = null;
  $rootScope.id_session = null;
  $rootScope.logged_in = false;
}])