app.directive('gameDirective', function($injector) {
        var linkFn = function(scope, ele, attrs) {
            createGame(scope, scope.players, scope.mapId, $injector);
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