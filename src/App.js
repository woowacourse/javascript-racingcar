const CarGameController = require('./controllers/CarGameController');

class App {
  #CarGameController;
  play() {
    this.#CarGameController = new CarGameController();
    this.#CarGameController.playGame();
  }
}

const app = new App();
app.play();

module.exports = App;
