app.controller("LoginController", function($scope, LoginFactory, $location) {

    $scope.username = "";
    $scope.password = "";

    $scope.login = function() {
       if(LoginFactory.loginUser($scope.username, $scope.password)) {
           $location.path(' #!/');
       }
       console.log("test");
    };
});

