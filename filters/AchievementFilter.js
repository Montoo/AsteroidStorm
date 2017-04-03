app.filter("AchievementFilter", function () {
    return function (user, achievementName) {
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