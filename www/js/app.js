var app = angular.module('dyel', ['ionic']);

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
  .state('SETS', {
    url: "/",
    templateUrl: 'sets.html'
  })
  .state('NEW', {
    url: "/new?newSection",
    templateUrl: 'newExercise.html',
    controller: function($scope, $stateParams) {
      $scope.newSection = $stateParams.newSection;
    }
  })
  .state('EDIT', {
    url: "/edit?exerciseName&exerciseWeight&exerciseUnits&exerciseSets&exerciseReps&pushIndex&editSection",
    templateUrl: 'exerciseDetails.html',
    controller: function($scope, $stateParams) {
      $scope.exerciseName = $stateParams.exerciseName;
      $scope.exerciseWeight = $stateParams.exerciseWeight;
      $scope.exerciseUnits = $stateParams.exerciseUnits;
      $scope.exerciseSets = $stateParams.exerciseSets;
      $scope.exerciseReps = $stateParams.exerciseReps;
      $scope.pushIndex = $stateParams.pushIndex;
      $scope.editSection = $stateParams.editSection;
    }
  });

});

app.controller('NewCtrl', function($scope) {

    var exercise = this;
    exercise.name = '';
    exercise.weight = 30;
    exercise.units = 'POUNDS';
    exercise.sets = 6;
    exercise.reps = 10;

});

app.controller('IndexCtrl', function($scope, $http, $ionicPopup, $ionicPlatform, $stateParams, $ionicNavBarDelegate) {

  $ionicPlatform.ready(function() {
    if (!window.localStorage['firstLaunch']) {
      $scope.setDefaultExercises();
    }
    $scope.loadData();

    document.addEventListener("pause", function() {
      $scope.saveData();
    }, false);
  });

  $scope.exerciseToEdit = null;
  $scope.pushIndex = null;
  $scope.editSection = null;

  $scope.newExercise = function(section) {
    $scope.exerciseSection = section;
    $scope.defaultExerciseDetails();
  };

  $scope.saveEditExercise = function(index, exercise, section) {
    if (!exercise.sets) {
      exercise.sets = 6;
    }
    if (!exercise.reps) {
      exercise.reps = 10;
    }
    if (!exercise.weight) {
      exercise.weight = 30;
      exercise.units = "pounds";
    }

    var pushSection = $scope.setPushSection(section);
    pushSection[index] = exercise;
    $ionicNavBarDelegate.back();
  };

  $scope.setPushSection = function(input) {
    //determine to which exercise section to push new exercise
    switch(input) {
      case "arms":
        var pushSection = $scope.armExercises;
        break;
      case "legs":
        var pushSection = $scope.legExercises;
        break;
      case "chest":
        var pushSection = $scope.chestExercises;
        break;
      case "abs":
        var pushSection = $scope.absExercises;
        break;
      case "back":
        var pushSection = $scope.backExercises;
        break;
    }
    return pushSection;
  }

  $scope.createExercise = function(exercise, section) {
    if (!exercise.sets) {
      exercise.sets = 6;
    }
    if (!exercise.reps) {
      exercise.reps = 10;
    }
    if (!exercise.weight) {
      exercise.weight = 30;
      exercise.units = "pounds";
    }

    var pushSection = $scope.setPushSection(section);

    pushSection.push({
      name: exercise.name,
      sets: exercise.sets,
      reps: exercise.reps,
      weight: exercise.weight,
      units: exercise.units,
      done: false
    });

    $scope.saveData();

    $ionicNavBarDelegate.back();
    exercise.name = "";
    exercise.sets = "";
    exercise.reps = "";
    exercise.weight = "";
    exercise.units = "";
  };

  $scope.weightRange = [];
  for (var i = 1; i <= 500; i++) {
    $scope.weightRange.push(i);
  };

  $scope.repsRange = [];
  for (var i = 1; i <= 20; i++) {
    $scope.repsRange.push(i);
  };

  $scope.setsRange = [];
  for (var i = 1; i <= 10; i++) {
    $scope.setsRange.push(i);
  };

  $scope.data = {
    value: 'kilograms'
  };

  $scope.units = [
    "kilograms",
    "pounds"
  ];

  $scope.setCounter = 0;

  $scope.exerciseAreas = ["ARMS", "LEGS", "CHEST", "ABS", "BACK", "SETS"];

  $scope.saveData = function() {
    window.localStorage['armExercises'] = JSON.stringify($scope.armExercises);
    window.localStorage['legExercises'] = JSON.stringify($scope.legExercises);
    window.localStorage['chestExercises'] = JSON.stringify($scope.chestExercises);
    window.localStorage['absExercises'] = JSON.stringify($scope.absExercises);
    window.localStorage['backExercises'] = JSON.stringify($scope.backExercises);
  };

  //load stored user exercises from window.localStorage if they exist. fallback to defaults
  $scope.loadData = function() {
    $scope.armExercises = JSON.parse(window.localStorage['armExercises'] || '{}');
    $scope.legExercises = JSON.parse(window.localStorage['legExercises'] || '{}');
    $scope.chestExercises = JSON.parse(window.localStorage['chestExercises'] || '{}');
    $scope.absExercises = JSON.parse(window.localStorage['absExercises'] || '{}');
    $scope.backExercises = JSON.parse(window.localStorage['backExercises'] || '{}');
  };

  $scope.setDefaultExercises = function() {
    $scope.armExercises = [
      {name: "seated dumbell curls", sets: 6, reps: 10, weight: 15, units: "kilograms", done: false},
      {name: "barbell curls", sets: 6, reps: 10, weight: 30, units: "kilograms", done: false},
      {name: "preacher curls", sets: 6, reps: 10, weight: 30, units: "kilograms", done: false},
      {name: "EZ bar curls", sets: 6, reps: 10, weight: 30, units: "kilograms", done: false},
      {name: "concentration curls", sets: 6, reps: 10, weight: 15, units: "kilograms", done: false},
      {name: "hammer curls", sets: 6, reps: 10, weight: 15, units: "kilograms", done: false}
    ];

    $scope.legExercises = [
      {name: "squats", sets: 6, reps: 10, weight: 100, units: "kilograms", done: false}
    ];

    $scope.chestExercises = [
      {name: "bench press", sets: 6, reps: 10, weight: 100, units: "kilograms", done: false}
    ];

    $scope.absExercises = [
      {name: "crunches", sets: 6, reps: 10, weight: 5, units: "kilograms", done: false}
    ];

    $scope.backExercises = [
      {name: "deadlifts", sets: 6, reps: 10, weight: 100, units: "kilograms", done: false}
    ];

    window.localStorage['armExercises'] = JSON.stringify($scope.armExercises);
    window.localStorage['legExercises'] = JSON.stringify($scope.legExercises);
    window.localStorage['chestExercises'] = JSON.stringify($scope.chestExercises);
    window.localStorage['absExercises'] = JSON.stringify($scope.absExercises);
    window.localStorage['backExercises'] = JSON.stringify($scope.backExercises);

    window.localStorage['firstLaunch'] = 'no';
  };

  $scope.setCounterTutorial = function() {
    //only display on first viewing
    if (!window.localStorage['tutorial']) {
      window.localStorage['tutorial'] = 'no';
      $ionicPopup.alert({
        title: 'TUTORIAL',
        template: "Tap the circle to increment the set counter. Tap the minus to decrement. Tap the arrow to reset."
      });
    }
  };

  $scope.defaultExerciseDetails = function() {
    //only display on first viewing
    if (!window.localStorage['exerciseDefaults']) {
      window.localStorage['exerciseDefaults'] = 'no';
      $ionicPopup.alert({
        title: 'BE A MAN',
        template: "All exercises default to 6 sets of 10 reps at 30 pounds unless otherwise specified."
      });
    }
  };

  $scope.listTutorial = function() {
    //only display on first section viewing
    if (!window.localStorage['firstListView']) {
      window.localStorage['firstListView'] = 'no';
      $ionicPopup.alert({
        title: 'TUTORIAL',
        template: "In each section you'll find a list of exercises. Swipe left on an exercise to edit or delete it."
      });
    }
  };

  $scope.displaySetsAndReps = function(exercise) {
    if (exercise.sets > 1) {
      var sets = "SETS";
    } else {
      var sets = "SET";
    }
    if (exercise.reps > 1) {
      var reps = "REPS";
    } else {
      var reps = "REP";
    }
    return exercise.sets + " " + sets + ", " + exercise.reps + " " + reps;
  }

  $scope.displayWeight = function(exercise) {
    if (exercise.weight) {
      if (exercise.weight == 1) {
        return exercise.weight + " " + exercise.units.substring(0,exercise.units.length-1).toUpperCase();
      }
      return exercise.weight + " " + exercise.units.toUpperCase();
    }
  }

  $scope.setDone = function(exercise) {
    exercise.done = !exercise.done;
  };

  $scope.iconSelector = function(input) {
    if (!input.done) {
      return "ion-android-checkbox-outline-blank"
    } else {
      return "ion-android-checkbox-outline"
    }
  };

  $scope.addSet = function() {
    if ($scope.setCounter < 9) {
      $scope.setCounter++;
    }
  }

  $scope.subtractSet = function() {
    if ($scope.setCounter > 0) {
      $scope.setCounter--;
    }
  }

  $scope.resetSet = function() {
    $scope.setCounter = 0;
  }

  //temporary until I find a better solution
  $scope.getItemHeight = function() {
    return 92;
  };

  $scope.getButtonHeight = function() {
    //need to account for the status bar being counted in the window height on iOS
    if (ionic.Platform.isIOS()) {
      return (window.innerHeight - 64) / 6;
    } else {
      return (window.innerHeight - 44) / 6;
    }
  };

  $scope.log = function(input) {
    $ionicPopup.alert({
      title: 'DEBUG ALERT',
      template: input
    });
  };

});