var app=angular.module('gcdApp',[]);
app.controller('gcdCtrl',function($scope){
  $scope.result;
	$scope.gcd=function(num){  
    
     $scope.rem=0;
    // $scope.result.push(rem);
    // $scope.result.push(b);
    while($scope.a!=0){

      $scope.rem=angular.copy($scope.a);
      $scope.a=angular.copy($scope.b%$scope.a);
     $scope.b=angular.copy($scope.rem);
      // a=b%a;
    }
	$scope.result=angular.copy($scope.rem);
	}


});