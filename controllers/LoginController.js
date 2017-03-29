app.controller("LoginController", function($scope, LoginFactory) {

    $scope.username = "";
    $scope.password = "";

    $scope.login = function() {
       return LoginFactory($scope.username, $scope.password);
    };
});

