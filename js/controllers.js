//Define the Angular app
var countryControllers = angular.module('countryControllers', []);

//Controls the search page
countryControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.countries = data.countries;
    $scope.countryOrder = 'name';
  });
}]);

//Controls the details page
countryControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.countries = data.countries;
    $scope.whichItem = $routeParams.itemId;
  });
}]);

//Controls the quiz page
countryControllers.controller('quizController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.countries = data.countries;
  });
}]);