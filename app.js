var app = angular.module("asteroidApp", ['ngRoute', 'ngCookies']);

app.factory('Data', function(){
    return { FirstName: '' };
});

app.controller('FirstCtrl', function( $scope, Data ){
    $scope.Data = Data;
});

app.controller('SecondCtrl', function( $scope, Data ){
    $scope.Data = Data;
});

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
