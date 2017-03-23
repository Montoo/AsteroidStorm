var app = angular.module("asteroidApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })
            .when('/game', {
            templateUrl: 'views/game.html',
            controller: 'GameController'
            })
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'LoginController'
            })
            .otherwise({
                redirectTo: "/"
            });
    }]);
