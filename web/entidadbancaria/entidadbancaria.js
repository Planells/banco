
ListController.$inject = ['$scope', '$log', 'entidadBancariaService'];

function ListController($scope, $log, entidadBancariaService) {


    var response = entidadBancariaService.findAll();

    response.success(function (data, status, headers, config) {
        $scope.entidadesBancarias = data;
    }).error(function (data, status, headers, config) {
        if (status === 500) {
//                Mostrar mensaje de error interno de servidor
        }
    });
    ;

    $scope.borrar = function (idEntidadBancaria) {
        var response = entidadBancariaService.delete(idEntidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        }).error(function (data, status, headers, config) {
            if (status === 500) {
//                Mostrar mensaje de error interno de servidor
            }
        });
    };


}
;
app.controller("ListController", ListController);


DetailController.$inject = ['$scope', "$routeParams", '$log', 'entidadBancariaService'];

function DetailController($scope, $routeParams, $log, entidadBancariaService) {


    var response = entidadBancariaService.detail($routeParams.idEntidadBancaria);

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    }).error(function (data, status, headers, config) {
        if (status === 500) {
//                Mostrar mensaje de error interno de servidor
        }
    });
    ;
    $scope.modificar = function () {

        var response = entidadBancariaService.modificar($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            $scope.entidadBancaria = data;
        }).error(function (data, status, headers, config) {
            if (status === 500) {
//                Mostrar mensaje de error interno de servidor
            }
            if (status === 400) {
                $scope.businessMessages = data;
            }
        });
    };
}
;

app.controller("DetailController", DetailController);


InsertController.$inject = ['$scope', '$log', '$http', 'entidadBancariaService'];

function InsertController($scope, $log, $http, entidadBancariaService) {


    var promise = entidadBancariaService.defaultValue();

    promise.then(function (response) {
        $scope.entidadBancaria = response.data;
    });

    $scope.insertar = function () {


        var response = entidadBancariaService.insertar($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            $scope.entidadBancaria = data;
        }).error(function (data, status, headers, config) {
            if (status === 500) {
//                Mostrar mensaje de error interno de servidor
            }
            if (status === 400) {
                $scope.businessMessages = data;
            }
        });
    };
}


app.controller("InsertController", InsertController);