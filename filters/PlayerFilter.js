app.filter('PlayerFilter', function () {
    return function(player) {
        var achievementList = JSON.parse(localStorage.getItem("achievementList"));
        if(score >= 100) {
            var inAchievementList = false;
            var j = 0;
            achievementList.forEach(function (e) {
                if(e.goal === 'get 100 points') {
                    e.users.forEach(function (i) {
                        if(i[j] === player) {
                            inAchievementList = true;
                        }
                    });
                    if(inAchievementList === false) {
                       e.users.push(player);
                    }
                }
            })
        }
        return achievementList;
    };

});