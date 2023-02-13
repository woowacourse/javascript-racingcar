const RacingCarGameController = require('./controller/RacingCarGameController');

class App {
  play() {
    new RacingCarGameController().play();
  }
}

module.exports = App;
