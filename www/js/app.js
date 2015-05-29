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

app.controller('IndexCtrl', function($scope, $ionicModal) {

  //For bringing up a new exercise modal pane
  $ionicModal.fromTemplateUrl('newExercise.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });

  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  $scope.exerciseAreas = ["ARMS", "LEGS", "CHEST", "ABS", "BACK", "CARDIO"];

  $scope.bicepExercises = [
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

  $scope.addExercise = function() {
    alert(window.screen.availHeight);
  };

  $scope.getItemHeight = function() {
    return 115;
  }

});