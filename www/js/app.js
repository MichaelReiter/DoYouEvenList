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
    templateUrl: 'arms.html'
  })
  .state('LEGS', {
    url: "/",
    templateUrl: 'legs.html'
  })
  .state('CHEST', {
    url: "/",
    templateUrl: 'chest.html'
  })
  .state('ABS', {
    url: "/",
    templateUrl: 'abs.html'
  })
  .state('BACK', {
    url: "/",
    templateUrl: 'back.html'
  })
  .state('CARDIO', {
    url: "/",
    templateUrl: 'cardio.html'
  })
  .state('NEW EXERCISE', {
    url: "/",
    templateUrl: 'newExercise.html'
  })
  .state('EXERCISE DETAILS', {
    url: "/",
    templateUrl: 'exerciseDetails.html'
  });

});

app.controller('IndexCtrl', function($scope, $http, $ionicModal, $ionicPopup) {

  /*
  //For pulling exercises from a rails server

  $http.get('http://localhost:3000/api/exercises')
    .success(function(exercises) {
      $scope.exercises = exercises;
    })
    .error(function(data) {
      console.log('A serverside error occured.');
    });
  */

  //For bringing up a new exercise modal pane
  $ionicModal.fromTemplateUrl('newExercise.html', function(modal) {
    $scope.newExerciseModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.createExercise = function(exercise) {
      
      $scope.armExercises.push({
        name: exercise.name,
        sets: exercise.sets,
        reps: exercise.reps,
        weight: exercise.weight,
        units: exercise.units,
        done: false
      });

      /*
      //For posting to a server
      $http.post('http://localhost:3000/api/exercises', {
        name: exercise.name,
        sets: exercise.sets,
        reps: exercise.reps,
        weight: exercise.weight,
        units: exercise.units
      })
        .success(function(exercises) {
          alert("it worked");
        })
        .error(function(data) {
          alert("nope");
        });
      */

      $scope.newExerciseModal.hide();
      exercise.name = "";
      exercise.sets = "";
      exercise.reps = "";
      exercise.weight = "";
      exercise.units = "";
  };

  $scope.submitForm = function(exercise) {
    createExercise(exercise);
  }

  $scope.newExercise = function() {
    $scope.newExerciseModal.show();
  };

  $scope.closeNewExercise = function() {
    $scope.newExerciseModal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.newExerciseModal.remove();
  });

  $scope.weightRange = [];
  for (var i = 1; i <= 500; i++) {
    $scope.weightRange.push(i);
  }

  $scope.repsRange = [];
  for (var i = 1; i <= 20; i++) {
    $scope.repsRange.push(i);
  }

  $scope.setsRange = [];
  for (var i = 1; i <= 10; i++) {
    $scope.setsRange.push(i);
  }

  $scope.data = {
    value: 'kilograms'
  };

  $scope.units = [
    "kilograms",
    "pounds"
  ];

  $scope.exerciseAreas = ["ARMS", "LEGS", "CHEST", "ABS", "BACK", "CARDIO"];

  $scope.armExercises = [
    {name: "seated dumbell curls", sets: 5, reps: 10, weight: 15, units: "kilograms", done: false},
    {name: "barbell curls", sets: 5, reps: 10, weight: 30, units: "kilograms", done: false},
    {name: "preacher curls", sets: 5, reps: 10, weight: 30, units: "kilograms", done: false},
    {name: "EZ bar curls", sets: 5, reps: 10, weight: 30, units: "kilograms", done: false},
    {name: "concentration curls", sets: 5, reps: 10, weight: 15, units: "kilograms", done: false},
    {name: "hammer curls", sets: 5, reps: 10, weight: 15, units: "kilograms", done: false},
  ];

  $scope.legExercises = [
    {name: "squats", sets: 5, reps: 10, weight: 100, units: "kilograms", done: false},
  ];

  $scope.chestExercises = [
    {name: "bench press", sets: 5, reps: 10, weight: 100, units: "kilograms", done: false},
  ];

  $scope.absExercises = [
    {name: "crunches", sets: 5, reps: 10, weight: 5, units: "kilograms", done: false},
  ];

  $scope.backExercises = [
    {name: "deadlifts", sets: 5, reps: 10, weight: 100, units: "kilograms", done: false},
  ];

  $scope.cardioExercises = [
    {name: "5km run", sets: 1, reps: 1, weight: 0, units: "kilograms", done: false},
  ];

  $scope.setDone = function(exercise) {
    exercise.done = !exercise.done;
  }

  $scope.iconSelector = function(input) {
    if (!input.done) {
      return "ion-android-checkbox-outline-blank"
    } else {
      return "ion-android-checkbox-outline"
    }
  }

  //temporary until I find a better solution
  $scope.getItemHeight = function() {
    return 90;
  }

  $scope.debugFunction = function(input) {
    $ionicPopup.alert({
      title: 'DEBUG ALERT',
      template: 'Debug message here.'
    });
  }

  $scope.log = function(input) {
    $ionicPopup.alert({
      title: 'DEBUG ALERT',
      template: input
    });
  }

});