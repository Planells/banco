

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: "entidadbancaria/entidadbancaria-list.html",
            controller: "ListController"
        });

        $routeProvider.when('/detail/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
            controller: "DetailController"
        });
        
        $routeProvider.when('/insert', {
            templateUrl: "entidadbancaria/entidadbancaria-insert.html",
            controller: "InsertController"
        });
    }]);


