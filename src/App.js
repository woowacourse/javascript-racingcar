const RacingGameController = require('./controller/RacingGameController');
const RacingGameService = require('./service/RacingGameService');

class App {
  start() {
    new RacingGameController(new RacingGameService()).play();
  }
}

new App().start();
