app.filter('PlayerFilter', function () {
    return function(player, score) {
        var achievementList = JSON.parse(localStorage.getItem("achievementList"));
        if(score >= 100) {
            var inAchievementList = false;
            achievementList.forEach(function (e) {
                if(e.goal === 'get 100 points') {
                    e.users.forEach(function (i) {
                        console.log("filter test: " + i.username);
                        console.log("player test: " + player);
                        if(i.username === player) {
                            inAchievementList = true;
                        }
                    });
                    if(inAchievementList === false) {
                        var playerObject = {
                            username:''
                        };
                        playerObject.username = player;
                       e.users.push(playerObject);
                    }
                }
            })
        }

        if(score >= 1000) {
            var inAchievementList = false;
            achievementList.forEach(function (e) {
                if(e.goal === 'get 1000 points') {
                    e.users.forEach(function (i) {
                        console.log("filter test: " + i.username);
                        console.log("player test: " + player);
                        if(i.username === player) {
                            inAchievementList = true;
                        }
                    });
                    if(inAchievementList === false) {
                        var playerObject = {
                            username:''
                        };
                        playerObject.username = player;
                        e.users.push(playerObject);
                    }
                }
            })
        }

        if(score >= 10000) {
            var inAchievementList = false;
            achievementList.forEach(function (e) {
                if(e.goal === 'get 10000 points') {
                    e.users.forEach(function (i) {
                        console.log("filter test: " + i.username);
                        console.log("player test: " + player);
                        if(i.username === player) {
                            inAchievementList = true;
                        }
                    });
                    if(inAchievementList === false) {
                        var playerObject = {
                            username:''
                        };
                        playerObject.username = player;
                        e.users.push(playerObject);
                    }
                }
            })
        }
        return achievementList;
    };

});