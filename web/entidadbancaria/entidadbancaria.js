


app.controller("ListController", ['$scope', '$log', 'entidadBancariaService', function ($scope, $log, entidadBancariaService) {


        var response = entidadBancariaService.findAll();

        response.success(function (data, status, headers, config) {
            $scope.entidadesBancarias = data;
        });

        $scope.borrar = function (idEntidadBancaria) {
            var response = entidadBancariaService.delete(idEntidadBancaria);

            response.success(function (data, status, headers, config) {
                $scope.entidadBancaria = data;
            });
        };


    }]);

app.controller("DetailController", ['$scope', "$routeParams", '$log', 'entidadBancariaService', function ($scope, $routeParams, $log, entidadBancariaService) {


        var response = entidadBancariaService.detail($routeParams.idEntidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        });
        $scope.modificar = function () {
          
            var response = entidadBancariaService.modificar($scope.entidadBancaria);

            response.success(function (data, status, headers, config) {
                $scope.entidadBancaria = data;
            });
        };
    }]);


app.controller("InsertController", ['$scope', '$log', '$http','entidadBancariaService', function ($scope, $log, $http, entidadBancariaService) {
        
               
        var promise = entidadBancariaService.defaultValue();
        
        promise.then(function (response) {
            $scope.entidadBancaria = response.data;
        });
        
        $scope.insertar = function () {
            

            var response = entidadBancariaService.insertar($scope.entidadBancaria);

            response.success(function (data, status, headers, config) {
                $scope.entidadBancaria = data;
            });

            response.success(function (data, status, headers, config) {
                $scope.entidadBancaria = data;
            });
        };
    }]);

