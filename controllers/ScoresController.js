app.controller("ScoresController", function ($scope) {
    var scoreArray = JSON.parse(localStorage.getItem("highscores"));
    var i =0;
    $scope.sortType     = 'score'; // set the default sort type
    $scope.sortReverse  = true;  // set the default sort order
    $scope.searchScore   = '';
    $scope.scoreSet = JSON.parse(localStorage.getItem("highscores"));

    for(var o in scoreArray) {
        o = scoreArray[i];
        console.log(o.username);
        i++;
    }
    console.log(i);



});