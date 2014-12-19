'use strict';

angular.module('easydesignApp')
  .factory('ErrorService', ['$http',
    function($http){
      return {
        getErrorMessage : function(action,code){
          code = validator.isNull(code) ? 404 : code;
          $http.get('statics/error.json').success(function(data){
            //@TODO
            console.log(data[action][code]);
          });
        }
      }
  }]);