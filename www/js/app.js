app = angular.module('dyel', ['ionic'])

.controller('DoYouEvenListController', function($scope) {

  $scope.exerciseAreas = ["ARMS", "LEGS", "CHEST", "ABS", "BACK", "CARDIO"];

  $scope.addExercise = function() {
    alert(window.screen.availHeight);
  };

  $scope.getItemHeight = function() {
    return ((window.screen.height - 64) / this.exerciseAreas.length) + 1;
  };

  $scope.getItemWidth = function() {
    return window.screen.width;
  };

});