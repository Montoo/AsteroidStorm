app.controller("RegisterController", function ($scope) {
    $scope.username = "";
    $scope.password = "";
    $scope.firstName = "";
    $scope.lastName = "";

    $scope.register = function() {
        registerFunction($scope.username, $scope.password, $scope.firstName, $scope.lastName);
        var o = localStorage.getItem($scope.username);
        var i = JSON.parse(o);
        console.log(i.username);
    }
});