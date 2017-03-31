app.controller("AchievementController", function ($scope, $cookies, $filter) {console.log("about Test");
    $scope.user = JSON.parse($cookies.get('user'));
    $scope.highestScore = $filter('ScoreFilter')($scope.user.username);
    if($filter('AchievementFilter')($scope.user.username, "get 100 points") === true) {
        $scope.a1 = "Completed";
    }
    else if($filter('AchievementFilter')($scope.user.username, "get 100 points") === false) {
        $scope.a1 = "-";
    }

    if($filter('AchievementFilter')($scope.user.username, "get 1000 points") === true) {
        $scope.a2 = "Completed";
    }
    else if($filter('AchievementFilter')($scope.user.username, "get 1000 points") === false) {
        $scope.a2 = "-";
    }

    if($filter('AchievementFilter')($scope.user.username, "get 10000 points") === true) {
        $scope.a3 = "Completed";
    }
    else if($filter('AchievementFilter')($scope.user.username, "get 10000 points") === false) {
        $scope.a3 = "-";
    }


});