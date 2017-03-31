app.controller("RegisterController", function ($scope, $location) {
    $scope.username = "";
    $scope.password = "";
    $scope.firstName = "";
    $scope.lastName = "";

    $scope.register = function() {
        registerFunction($scope.username, $scope.password, $scope.firstName, $scope.lastName);
        var userList = JSON.parse(localStorage.getItem("userList"));

        userList.forEach(function (e) {
            console.log(e.username);
        });
        $location.path("#!/login");
    }
});