( function(){
  'use strict';
  angular.module('CounterApp', [])
  .controller('CounterController', CounterController);
  
  CounterController.$inject  = ['$scope'];
  function CounterController($scope){
      $scope.onceCounter=0;
      $scope.counter=0;
$scope.showNumberOfWatchers=function(){
    comsole.log("#counter",$scope.$$watcherCount);
};
$scope.countOnce= function(){
    $scope.onceCounter=1;
};
$scope.upCounter= function(){
    $scope.counter++;
};

$scope.$watch('onceCounter',function(newValue,oldValue)
{
    console.log("onceCounter old value;",oldValue);
    console.log("onceCounter New value;",newValue);

});
$scope.$watch('counter',function(newValue,oldValue)
{
    console.log("Counter old value;",oldValue);
    console.log("Counter New value;",newValue);

});
  }
})();
 