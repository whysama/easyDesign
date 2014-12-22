'use strict';

angular.module('easydesignApp')
  .factory('ModelService', ['$http', '$rootScope','$location',
    function($http, $rootScope,$location){
      return {
        getModels : function(){
          var actionName = 'getModels';
          $http.post('../php/Model/getModels.json')
            .success(function(data){
              console.log(data);
              if (validator.isNull(data.response.code)) {
                console.log(data.response);
              }else{
                return callback(false,actionName,data.response.code);
              }
            })
            .error(function(data){
              return callback(false,actionName);
            });
        }
      }
  }]);