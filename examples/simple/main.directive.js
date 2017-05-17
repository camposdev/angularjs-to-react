const app = angular.module('myApp', ['react'])

app.controller('mainController', function($scope){
  let vm = this

  vm.initialCounter = 10
})

app.directive('counterComponent', function (reactDirective) {
  return reactDirective(CounterComponent)
});