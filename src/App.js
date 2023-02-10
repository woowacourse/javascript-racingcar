const RacingGame = require('./controller/RacingGame');

class App {
  start() {
    new RacingGame().play();
  }
}

new App().start();
