app.controller('GameController', ['GameService', function(GameService){
    var self = this;
    self.games = GameService.games;
}]);