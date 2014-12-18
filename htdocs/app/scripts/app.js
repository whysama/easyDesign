'use strict';

/**
 * @ngdoc overview
 * @name easydesignApp
 * @description
 * # easydesignApp
 *
 * Main module of the application.
 */
angular
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