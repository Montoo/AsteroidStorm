app.controller('MainController', function($scope, LoginFactory){
  $scope.title = "The best game in the world!";
  $scope.loginCheck = LoginFactory.loginCheck;
});
