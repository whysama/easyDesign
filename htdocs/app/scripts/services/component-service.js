'use strict';

angular.module('easydesignApp')
  .factory('ComponentService', ['$http',
    function($http){
      return {
        getAllComponents : function(callback){
          $http.get('../php/Model/getAllComponents.json').success(function(data){
          var components = new Object; 
          for(var i in data.response){
            components[i] = JSON.parse(data.response[i]); 
          }
          console.log(components);
          return callback(components);
          });
        }
      }
  }]);