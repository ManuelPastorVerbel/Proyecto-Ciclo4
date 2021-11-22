var ngApp = angular.module('AppClase17', []);
  
 ngApp.controller('controlado', function ($scope, $http) {

    $scope.mostrarMensaje = function () {    
        
      $scope.mensaje="respuesta desde mi js"
       



    }


    $scope.registro = function(){
     
     

      $http
      .post("http://localhost:3000/registro", $scope.formData)
      .then(function successCallback(response)  {
       // $scope.formData = {};
        $scope.mensaje = response.data;
      })



    }









 })