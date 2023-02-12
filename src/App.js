const RacingGame = require('./controller/RacingGame');
const RacingGameService = require('./service/RacingGameService');

class App {
  start() {
    new RacingGame(new RacingGameService()).play();
  }
}

new App().start();
