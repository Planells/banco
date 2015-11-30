
ListController.$inject = ['$scope', '$log', 'entidadBancariaService'];

function ListController ($scope, $log, entidadBancariaService) {


        var promise = entidadBancariaService.findAll();

        promise.then(function (response) {
            $scope.entidadesBancarias = response.data;
        });

        $scope.borrar = function (idEntidadBancaria) {
            var response = entidadBancariaService.delete(idEntidadBancaria);

            response.success(function (data, status, headers, config) {
                $scope.entidadBancaria = data;
            });
        };


    };
app.controller("ListController",ListController);


DetailController.$inject = ['$scope', "$routeParams", '$log', 'entidadBancariaService'];

function DetailController ($scope, $routeParams, $log, entidadBancariaService) {


        var promise = entidadBancariaService.detail($routeParams.idEntidadBancaria);

        promise.then(function (response) {
            $scope.entidadBancaria = response.data;
        });
        $scope.modificar = function () {
          
            var response = entidadBancariaService.modificar($scope.entidadBancaria);

            response.success(function (data, status, headers, config) {
                $scope.entidadBancaria = data;
            });
        };
    };
    
    app.controller("DetailController",DetailController);


    InsertController.$inject= ['$scope', '$log', '$http','entidadBancariaService'];
    
    function InsertController ($scope, $log, $http, entidadBancariaService) {
        
               
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
    };

    app.controller("InsertController",InsertController);