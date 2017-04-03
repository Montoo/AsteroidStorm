app.controller('MainController', function($scope, LoginFactory){
    var achievementList = [{
        goal: 'get 100 points',
        users: [{
            username: 'Test'
        }]
    },
        {
            goal: 'get 1000 points',
            users: [
                {
                    username: 'Test'
                }
            ]
        },
        {
            goal: 'get 10000 points',
            users: []
        }
    ];
    if(localStorage.getItem("achievementList") === null) {
        localStorage.setItem("achievementList", JSON.stringify(achievementList));
    }


  $scope.title = "The best game in the world!";
  $scope.loginCheck = LoginFactory.loginCheck;
  console.log("MainTest");

});
