var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/validate.html',
    controller: 'validateUserController'
  })
  .when('/tasks',{
    templateUrl: 'partials/showall.html',
    controller: 'showTaskController'
  })
  .when('/create',{
    templateUrl: 'partials/create.html',
    controller: 'createTaskController'
  })
  .otherwise('/')
});
