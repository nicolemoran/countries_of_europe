//Route controllers that identify which partials go with which links
var countryApp = angular.module('countryApp', [
	'ngRoute',
	'countryControllers'
	]);

countryApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	when('/details/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}).
	when('/map', {
		templateUrl: 'partials/map.html',
		controller: 'MapController'
	}).
	when('/quiz', {
		templateUrl: 'partials/quiz.html',
		controller: 'QuizController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);