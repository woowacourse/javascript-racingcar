const InputView = require("./UI/InputView");

class App {
  #games;

  constructor(game) {
    this.#games = game;
  }

  async play() {
    const cars = await InputView.readCarName();
    const round = await InputView.readTryCount();

    this.#games.initializeGameStatus(cars, round);
    this.#games.showGameResult();
  }
}

module.exports = App;
