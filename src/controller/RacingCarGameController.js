const Console = require('../lib/console');
const Car = require('../models/Car');
const RacingCarGame = require('../models/RacingCarGame');
const Validator = require('../utils/Validator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
class RacingCarGameController {
  #game;

  play() {
    InputView.readCarName(this.#onCarNameSubmit.bind(this));
  }

  #onCarNameSubmit(carNames) {
    try {
      Validator.checkCarName(carNames);
      const cars = carNames.split(',').map((carName) => new Car(carName));
      this.#game = new RacingCarGame(cars);
      InputView.readMovingCount(this.#onMovingCountSubmit.bind(this));
    } catch (error) {
      OutputView.printError(error.message);
      InputView.readCarName(this.#onCarNameSubmit.bind(this));
    }
  }

  #onMovingCountSubmit(movingCount) {
    try {
      Validator.checkMovingCount(movingCount);
      this.#printResult(movingCount);
      Console.close();
    } catch (error) {
      OutputView.printError(error.message);
      InputView.readMovingCount(this.#onMovingCountSubmit.bind(this));
    }
  }

  #printResult(movingCount) {
    OutputView.printResultTitle();
    OutputView.printCars(this.#game.getCarsInfo());
    for (let i = 0; i < movingCount; i += 1) {
      this.#game.moveCars();
      OutputView.printCars(this.#game.getCarsInfo());
    }
    OutputView.printWinner(this.#game.getWinner());
  }
}

module.exports = RacingCarGameController;
