// create the module and name it scotchApp
var softalaApp = angular.module('softalaApp', ['ngRoute']);

// configure our routes
softalaApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {redirectTo: function () {
            return '/login';
        }})

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
        })

        .when('/login', {
            templateUrl : 'pages/login.html',
            controller : 'loginController'
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

softalaAll.controller('loginController', funtion($scope) {
    $scope.message = 'Login form';
});