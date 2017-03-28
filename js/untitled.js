
var app=angular.module('gcdApp',[]);
app.controller('gcdCtrl',function($scope){
  $scope.result=[];
  $scope.gcd=function(num){  
    var a,b,div=0;
    $scope.result.push(a);
    $scope.result.push(b);
    while(a!=0){
      div=a;
      a=b%a;
      b=div;
    }
  $scope.result.push(div);
  }


});