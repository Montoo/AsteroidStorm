app.filter("AchievementFilter", function () {
    return function (user, achievementName) {
        var achievementList = [];
        if(localStorage.getItem("achievementList") === null) {
            achievementList = [
                {
                    goal: 'get 100 points',
                    users: [{
                        username:'Test'
                    }]
                },
                {
                    goal: 'get 1000 points',
                    users: [
                        {
                            username:'Test'
                        }
                    ]
                },
                {
                    goal: 'get 10000 points',
                    users: [
                    ]
                }
            ];

            localStorage.setItem("achievementList", JSON.stringify(achievementList));
        }
        achievementList = JSON.parse(localStorage.getItem("achievementList"));
        var completed = false;
        achievementList.forEach(function (e) {
            if(e.goal === achievementName) {
                e.users.forEach(function (i) {
                  if(i.username === user) {
                      completed = true;
                  }
                });
            }
        });
        return completed;
    }
});