const RacingGameController = require('./controller/RacingGameController');
const RacingGameService = require('./service/RacingGameService');

class App {
  start() {
    new RacingGameController(new RacingGameService()).playGame();
  }
}

new App().start();
