var app = angular.module('dyel', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/");

  $stateProvider

  .state('index', {
    url: "/",
    templateUrl: 'home.html'
  })
  .state('ARMS', {
    url: "/",
    templateUrl: 'ARMS.html'
  })
  .state('LEGS', {
    url: "/",
    templateUrl: 'LEGS.html'
  })
  .state('CHEST', {
    url: "/",
    templateUrl: 'CHEST.html'
  })
  .state('ABS', {
    url: "/",
    templateUrl: 'ABS.html'
  })
  .state('BACK', {
    url: "/",
    templateUrl: 'BACK.html'
  })
  .state('CARDIO', {
    url: "/",
    templateUrl: 'CARDIO.html'
  });

})

app.controller('IndexCtrl', function($scope) {

  $scope.exerciseAreas = ["ARMS", "LEGS", "CHEST", "ABS", "BACK", "CARDIO"];

  $scope.bicepExercises = [
    {title: "seated dumbell curls", sets: 4, reps: 8, weight: 20, units: "kilograms"},
    {title: "barbell curls", sets: 4, reps: 8, weight: 20, units: "kilograms"},
    {title: "preacher curls", sets: 4, reps: 8, weight: 20, units: "kilograms"},
  ];

  $scope.tricepExercises = [
    {title: "tricep pushdown", sets: 4, reps: 8, weight: 20, units: "kilograms"},
  ];

  $scope.addExercise = function() {
    alert(window.screen.availHeight);
  };

  $scope.getItemHeight = function() {
    return (window.screen.height) / 6;
  }

});