app.controller("RegisterController", function ($scope, $location, RegisterFactory) {
    $scope.username = "";
    $scope.password = "";
    $scope.firstName = "";
    $scope.lastName = "";

    $scope.register = function() {
        $scope.check = false;

        $scope.check = RegisterFactory.registerFunction($scope.username, $scope.password, $scope.firstName, $scope.lastName);
        var userList = JSON.parse(localStorage.getItem("userList"));

        if($scope.check === true) {
            document.getElementById("rf").style.display = "block";
        }

        userList.forEach(function (e) {
            console.log(e.username);
        });
        //$location.path("#!/login");
    }
});