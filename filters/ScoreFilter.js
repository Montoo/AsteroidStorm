app.filter("ScoreFilter", function () {
    return function (user) {
        console.log(user);
        var scoreList = JSON.parse(localStorage.getItem("highscores"));
        var highestScore = 0;
        var currentScore = 0;

        scoreList.forEach(function (e) {
            if(e.username === user) {
                currentScore = e.score;
                if(currentScore > highestScore) {
                    highestScore = currentScore;
                }
            }
        });
        return highestScore
    }

});