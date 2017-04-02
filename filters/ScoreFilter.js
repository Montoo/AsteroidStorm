app.filter("ScoreFilter", function () {
    return function (user) {
        if(localStorage.getItem("highscores") === null) {
            var highScores = [{
                username: 'Test',
                score: '1337'
            }];
            localStorage.setItem("highscores", JSON.stringify(highScores));
        }
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