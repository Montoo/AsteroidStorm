var app = angular.module("asteroidApp", ['ngRoute', 'ngCookies']);

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
            .when('/achievements', {
                templateUrl: 'views/achievements.html',
                controller: 'AchievementController'
            })
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            })
            .otherwise({
                redirectTo: "/"
            });
    }]);
