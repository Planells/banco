

function EntidadBancariaService($http, $q) {

    this.findAll = function () {
        var config = {
            method: "GET",
            url: "/banco_api/api/entidadbancaria"
        };

        return $http(config);
    };
    
    this.modificar = function (entidadBancaria) {
        var config = {
                method: "PUT",
                url: "/banco_api/api/entidadbancaria",
                data: entidadBancaria
            };

        return $http(config);
    };
    
     this.insertar = function (entidadBancaria) {
        var config = {
                method: "POST",
                url: "/banco_api/api/entidadbancaria",
                data: entidadBancaria
            };

        return $http(config);
    };
    

    this.delete = function (idEntidadBancaria) {
        var config = {
            method: "DELETE",
            url: "/banco_api/api/entidadbancaria/" + idEntidadBancaria
        };

        return $http(config);
    };

    this.detail = function (idEntidadBancaria) {
        var config = {
            method: "GET",
            url: "/banco_api/api/entidadbancaria/" + idEntidadBancaria
        };

        return $http(config);
    };

    this.defaultValue = function () {
        var defered = $q.defer();
        var promise = defered.promise;

        $http({
            method: "GET",
            url: "/banco_api/api/entidadbancaria/defaultValue"
        }).then(function (response) {
            response.data.fechaCreacion=new Date(response.data.fechaCreacion);
            
            
            defered.resolve(response);
        },function (response) {
            
            defered.reject(response);
        });

        return promise;



    };

}

app.service("entidadBancariaService", EntidadBancariaService);



