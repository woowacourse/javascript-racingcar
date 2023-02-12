const RacingGameController = require('./controller/RacingGameController');

class App {
  #controller = new RacingGameController();

  play() {
    this.#controller.playGame();
  }
}

module.exports = App;

const app = new App();
app.play();
