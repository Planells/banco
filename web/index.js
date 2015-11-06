



var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: "listar.html",
            controller: "ListController"
        });

        $routeProvider.when('/get/:idEntidadBancaria', {
            templateUrl: "get.html",
            controller: "GetController"
        });
        
        $routeProvider.when('/insert', {
            templateUrl: "insert.html",
            controller: "InsertController"
        });

        $routeProvider.otherwise({
            redirectTo: '/list'
        });
    }]);


app.controller("ListController", ['$scope', '$log', '$http', function ($scope, $log, $http) {
        var config = {
            method: "GET",
            url: "/banco_api/api/entidadbancaria"
        }

        var response = $http(config);

        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });

        $scope.borrar = function (idEntidadBancaria) {
            var config = {
                method: "DELETE",
                url: "/banco_api/api/entidadbancaria/" + idEntidadBancaria
            }

            var response = $http(config);

            response.success(function (data, status, headers, config) {
                $scope.entidadBancaria = data;
            });
        };


    }]);

app.controller("GetController", ['$scope', "$routeParams", '$log', '$http', function ($scope, $routeParams, $log, $http) {

        var config = {
            method: "GET",
            url: "/banco_api/api/entidadbancaria/" + $routeParams.idEntidadBancaria
        }

        var response = $http(config);

        response.success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        });

    }]);




app.controller("InsertController",['$scope','$log','$http',function($scope,$log,$http) {
     
     $scope.entidadBancaria = {};
     
     
     
        var config={    
    method:"POST",
    url:"/banco_api/api/entidadbancaria",
    data:$scope.entidadBancaria
  };
   
  var response=$http(config);
   
  response.success(function(data, status, headers, config) {
      $scope.entidadBancaria=data;
  });
    
}]);


