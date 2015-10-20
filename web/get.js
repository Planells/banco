

var app=angular.module("app",[]);

function getParameterByName( name ){
    var regexS = "[\\?&]"+name+"=([^&#]*)", 
  regex = new RegExp( regexS ),
  results = regex.exec( window.location.search );
  if( results == null ){
    return "";
  } else{
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}


app.controller("IndexController",['$scope','$log','$http',function($scope,$log,$http) {
     
        var config={    
    method:"GET",
    url:"/banco_api/api/entidadbancaria/"+getParameterByName("idEntidadBancaria")
  }
   
  var response=$http(config);
   
  response.success(function(data, status, headers, config) {
      $scope.entidadBancaria=data;
  });
    
}]);


