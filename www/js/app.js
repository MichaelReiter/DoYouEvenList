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
  })
  .state('NEW EXERCISE', {
    url: "/",
    templateUrl: 'newExercise.html'
  });

})

app.controller('IndexCtrl', function($scope, $ionicModal, $ionicPopup) {

  //For bringing up a new exercise modal pane
  $ionicModal.fromTemplateUrl('newExercise.html', function(modal) {
    $scope.newExerciseModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.createExercise = function(exercise) {
    $scope.exercises.push({
      title: exercise.title,
      sets: exercise.sets,
      reps: exercise.reps,
      weight: exercise.weight,
      units: exercise.units
    });
    $scope.newExerciseModal.hide();
    exercise.title = "";
  };

  $scope.newExercise = function() {
    $scope.newExerciseModal.show();
  };

  $scope.closeNewExercise = function() {
    $scope.newExerciseModal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.newExerciseModal.remove();
  });

  $scope.exerciseAreas = ["ARMS", "LEGS", "CHEST", "ABS", "BACK", "CARDIO"];

  $scope.exercises = [
    {title: "seated dumbell curls", sets: 4, reps: 8, weight: 20, units: "kilograms"},
    {title: "barbell curls", sets: 4, reps: 8, weight: 20, units: "kilograms"},
    {title: "preacher curls", sets: 4, reps: 8, weight: 20, units: "kilograms"},
    {title: "EZ bar curls", sets: 4, reps: 8, weight: 20, units: "kilograms"},
    {title: "concentration curls", sets: 4, reps: 8, weight: 20, units: "kilograms"},
    {title: "hammer curls", sets: 4, reps: 8, weight: 20, units: "kilograms"}
  ];

  $scope.tricepExercises = [
    {title: "tricep pushdown", sets: 4, reps: 8, weight: 20, units: "kilograms"},
  ];

  //temporary until I find a better solution
  $scope.getItemHeight = function() {
    return 90;
  }

  $scope.debugFunction = function() {
    $ionicPopup.alert({
      title: 'DEBUG ALERT',
      template: 'Debug message here.'
    });
  }

});