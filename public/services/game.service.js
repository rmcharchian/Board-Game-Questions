app.service('GameService', ['$http', function($http){
    var self = this;
    self.games= {list: []};
    self.getGames = function(){
        $http({
            method: 'GET',
            url: '/games' // this might need to be something else.
        }).then(function(response){
            self.games.list = response.data;
        });
    };
    self.getGames();
}]);