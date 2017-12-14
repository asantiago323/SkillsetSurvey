angular.module("surveyApp", []).controller("surveyCtrl", [
  "$scope",
  function($scope) {
    $scope.lists = [{ category: "Frontend", skill: "AngularJS" }];

    $scope.addToList = function() {
      $scope.lists.push({ category: $scope.newCat, skill: $scope.newSkill });
    };
  }
]);
