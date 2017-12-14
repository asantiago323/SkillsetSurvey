angular.module('surveyApp', []).
controller('surveyCtrl', ['$scope', function($scope){
    $scope.list = [];

    $scope.addToList() = function(){}
    $scope.submit() = function(){}
}]).
controller('addCtrl', ['$scope', function($scope){
    $scope.skillset = {
        'category' : 'Frontend',
        'skill' : 'AngularJS'
    };
}])