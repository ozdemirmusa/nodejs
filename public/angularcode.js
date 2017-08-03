var app = angular.module('app', []);
app.controller('control', function($scope, $http) {
    console.log("Hello World from controller");
 
 var liste=function(){
$http({
      method: "GET",
      url:"/liste"
   }).then(function (success){
      $scope.listem = success.data;
    }).catch(function(err) {
      console.error('Error :', err);
    }).finally(function() {
       console.log("İşlem Bitti.");
    });
}
liste();

 $scope.ekle=function()
 {
 	console.log($scope.m);

 $http({
      method: "POST",
      url:"/ekle",
      data:$scope.veri
   }).then(function (success){
    $scope.veri=null;
      liste();
    }).catch(function(err) {
      console.error('Error :', err);
    }).finally(function() {
       console.log("İşlem Bitti.");
    });
 }

  $scope.sil=function(id)
 {
  console.log(id);
 $http({
      method: "DELETE",
      url:"/sil/"+id
   }).then(function (success){
    $scope.veri=null;
      liste();
      
    }).catch(function(err) {
      console.error('Error :', err);
    }).finally(function() {
       console.log("İşlem Bitti.");
    });
 }
 $scope.sec=function(id)
 {
  console.log(id);
  $http({
      method: "GET",
      url:"/sec/"+id
   }).then(function (success){
    console.log("geldimi");
    console.log("control geldi"+success.data[0]);
     console.log(success.data[0]);
       $scope.veri =success.data[0];       
    }).catch(function(err) {
      console.error('Error :', err);
    }).finally(function() {
       console.log("İşlem Bitti.");
    });
 
 }

 $scope.duzenle=function()
 {
 $http({
      method: "PUT",
      url:"/duzenle/"+$scope.veri.id,
      data:$scope.veri,
      headers : {
        'Content-Type' : 'application/json'
    }
   }).then(function (success){
    console.log(success);
    $scope.veri=null;
      liste();
      $scope.veri="";
    }).catch(function(err) {
      console.error('Error :', err);
    }).finally(function() {
       console.log("İşlem Bitti.");
    });
 }
})