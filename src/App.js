const InputView = require("./View/InputView");
const ErrorHandler = require("./Validator/ErrorHandler");
const {
  inputCarNameValidator,
  tryCountValidator,
} = require("./Validator/Validator");
const CarGame = require("./Domain/CarGame");
class App {
  #games;

  constructor(game = new CarGame()) {
    this.#games = game;
  }

  async play() {
    this.getCarNames();
  }

  async getCarNames() {
    const cars = await InputView.readCarName();
    const validateObject = {
      validator: () => inputCarNameValidator(cars),
      nextStep: () => this.getTryCount(cars),
      afterError: () => this.getCarNames(),
    };

    ErrorHandler(validateObject);
  }

  async getTryCount(cars) {
    const round = await InputView.readTryCount();

    const validateObject = {
      validator: () => tryCountValidator(round),
      nextStep: () => this.startPlay(cars, round),
      afterError: () => this.getTryCount(cars),
    };

    ErrorHandler(validateObject);
  }

  startPlay(cars, round) {
    this.#games.initializeGameStatus(cars, round);
    this.#games.showGameResult();
  }
}

module.exports = App;
