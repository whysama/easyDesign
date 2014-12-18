'use strict';

/**
 * @ngdoc function
 * @name easydesignApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the easydesignApp
 */
angular.module('easydesignApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
