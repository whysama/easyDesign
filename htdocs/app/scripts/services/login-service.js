'use strict';

angular.module('easydesignApp')
  .factory('LoginService', ['$http', '$rootScope','$location',
    function($http, $rootScope,$location){
      return {
        login : function(login,password,callback){
          var actionName = 'login';
          $http.post('../php/User/doLogin.json','login='+login+'&password='+password)
            .success(function(data){
              console.log(data);
              if (validator.isNull(data.response.code)) {
                console.log(data.response);
                $rootScope.id_user = data.response.id_user;
                $rootScope.user_type = data.response.user_type;
                $rootScope.id_session = data.response.sid;
                $rootScope.logged_in = true;
                return callback(ture,actionName);
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