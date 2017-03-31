app.directive('gameDirective', function($injector, LoginFactory, $cookies, PlayerFilter) {
        var linkFn = function(scope, ele, attrs) {
            if(localStorage.getItem("highscores") === null) {
                var highscores = [];
                localStorage.setItem("highscores", JSON.stringify(highscores));
            }

            var jsonObject = $cookies.get('user');
            var user = JSON.parse(jsonObject);
            console.log(user.username);
            createGame(scope, user, scope.mapId, $injector, PlayerFilter);
        };

        return {
            scope: {
                players: '=',
                mapId: '='
            },
            template: '<div id="gameWrapper"></div>',
            link: linkFn,
        };

    });