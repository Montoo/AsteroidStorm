app.controller('MainController', function($scope, LoginFactory){
  $scope.title = "The best game in the world!";
  $scope.loginCheck = LoginFactory.loginCheck;
  console.log("MainTest");
  if(localStorage.getItem("achievementList") === null) {
      var achievementList = [
          {
              goal: 'get 100 points',
              users: []
          },
          {
              goal: 'get 1000 points',
              users: []
          },
          {
              goal: 'get 10000 points',
              users: []
          }
      ];

      localStorage.setItem("achievementList", JSON.stringify(achievementList));
  }

});
