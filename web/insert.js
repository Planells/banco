
var app=angular.module("app",[]);




app.controller("InsertController",['$scope','$log','$http',function($scope,$log,$http) {
     
     $scope.firstName
     $scope.lastName
     
     
        var config={    
    method:"POST",
    url:"/banco_api/api/entidadbancaria"
  }
   
  var response=$http(config);
   
  response.success(function(data, status, headers, config) {
      $scope.entidadBancaria=data;
  });
    
}]);