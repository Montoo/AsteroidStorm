app.directive('gameDirective', function($injector, LoginFactory, $cookies, $filter) {
        var linkFn = function(scope, ele, attrs) {
            if(localStorage.getItem("highscores") === null) {
                var highscores = [{
                    username: 'Test',
                    score: '1337'
                }];
                localStorage.setItem("highscores", JSON.stringify(highscores));
            }

            var jsonObject = $cookies.get('user');
            var user = JSON.parse(jsonObject);
            console.log(user.username);
            createGame(scope, user, scope.mapId, $injector, $filter('PlayerFilter'));
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