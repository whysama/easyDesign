'use strict';

angular.module('easydesignApp')
  .factory('ErrorService', ['$http',
    function($http){
      return {
        getErrorMessage : function(code,action){
          $http.get('statics/error.json').success(function(data){
            console.log(data);
          });
        }
      }
  }]);