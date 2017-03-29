var app = angular.module("asteroidApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'views/register.html',
                controllerAs: 'vm'
            })
            .when('/game', {
            templateUrl: 'views/game.html',
            controller: 'GameController'
            })
            .when('/scores', {
                templateUrl: 'views/scores.html',
                controller: 'ScoresController'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutController'
            })
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            })
            .otherwise({
                redirectTo: "/"
            });
    }]);
