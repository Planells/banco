



var app=angular.module("app",[]);
    
app.controller("IndexController",['$scope','$log','$http',function($scope,$log,$http) {
  var config={
    method:"GET",
    url:"/banco_api/api/entidadbancaria"
  }
   
  var response=$http(config);
   
  response.success(function(data, status, headers, config) {
      $scope.entidadesBancarias=data;
  });
    
}]);
