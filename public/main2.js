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
 onload = function () {
  document.getElementById('lbtnTest').onclick = function () {
      alert("hola")
// Obtenga la aplicación Angular a través del controlador
      var appElement = document.querySelector('[ng-controller=myController]');
// Obtenga la variable $ scope
     var $scope = angular.element(appElement).scope();
      
// Llama a la variable msg y cambia el valor de msg
      $scope.msg = '123456';
// La línea anterior cambió el valor de msg. Si desea sincronizar con el controlador angular, debe llamar al método $ apply ().
      $scope.$apply();
// Llame al método getData () en el controlador
  console.log($scope.getData());
   }
}