// create the module and name it scotchApp
var softalaApp = angular.module('softalaApp', ['ngRoute']);

// configure our routes
softalaApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/hops.html',
            controller  : 'hopsController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/info.html',
            controller  : 'infoController'
        });
});

// create the controller and inject Angular's $scope
softalaApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

softalaApp.controller('hopsController', function($scope) {
    $scope.message = 'HOPSi mä olen';
});

softalaApp.controller('infoController', function($scope) {
    $scope.message = 'Mitään en kyllä tiedä';
});