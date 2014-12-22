'use strict';

angular.module('easydesignApp')
  .controller('DashboardCtrl', ['$rootScope','$scope', '$location', '$http', 'ErrorService',
    function($rootScope,$scope,$location,$http,ErrorService){
      $scope.templates = {
        "models" : {
          "name" : "models",
          "url" : "views/models.html"
        },
        "projects" : {
          "name" : "projects",
          "url" : "views/projects.html"
        }
      }
      $scope.template = $scope.templates.projects;
      console.log($rootScope.current_user);
      $scope.getModels = function(){
        if ($rootScope.current_user.user_type == '1') {
          $http.get('../php/Model/getModels.json')
              .success(function(data){
                $scope.template = $scope.templates.models;
                $scope.models = data.response;
                console.log($scope.models);
              });
        }
      }
      $scope.getProjects = function(){
        if (!validator.isNull($rootScope.current_user.id_user)) {
          $http.post('../php/Project/getProjects.json?','id_user='+$rootScope.current_user.id_user)
              .success(function(data){
                $scope.template = $scope.templates.projects;
                $scope.projects = data.response;
                console.log($scope.projects);
              });
        }
      }
    }]);
