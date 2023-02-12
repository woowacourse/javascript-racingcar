const InputView = require("./View/InputView");
const utils = require("./Utils/Utils");

class App {
  #games;

  constructor(game) {
    this.#games = game;
  }

  async play() {
    this.getCarNames();
  }

  async getCarNames() {
    try {
      const cars = await InputView.readCarName();

      this.getTryCount(cars);
    } catch (error) {
      utils.print(error);
      this.getCarNames();
    }
  }

  async getTryCount(cars) {
    try {
      const round = await InputView.readTryCount();

      this.startPlay(cars, round);
    } catch (error) {
      utils.print(error);
      this.getTryCount(cars);
    }
  }

  startPlay(cars, round) {
    this.#games.initializeGameStatus(cars, round);
    this.#games.showGameResult();
  }
}

module.exports = App;
