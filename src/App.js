const { Car, MoveDecider, RacingCarGame } = require('./domain');
const { validateCarNames, validateMovingCount } = require('./domain/validator');
const { InputView, OutputView } = require('./view');

const { CAR_RULE } = require('./constants');
const { Console } = require('./utils');

class App {
  #game;

  play() {
    InputView.readCarName(this.#onCarNameSubmit.bind(this));
  }

  #onCarNameSubmit(carNames) {
    try {
      validateCarNames(carNames);
      const cars = carNames.split(CAR_RULE.NAME_SEPARATOR).map((carName) => new Car(carName));
      this.#game = new RacingCarGame(cars);
      InputView.readMovingCount(this.#onMovingCountSubmit.bind(this));
    } catch (error) {
      OutputView.printError(error.message);
      InputView.readCarName(this.#onCarNameSubmit.bind(this));
    }
  }

  #onMovingCountSubmit(movingCount) {
    try {
      validateMovingCount(movingCount);
      const carCount = this.#game.getCarCount();
      this.#printResult(movingCount, carCount);
      Console.close();
    } catch (error) {
      OutputView.printError(error.message);
      InputView.readMovingCount(this.#onMovingCountSubmit.bind(this));
    }
  }

  #printResult(movingCount, carCount) {
    OutputView.printResultTitle();
    OutputView.printCars(this.#game.getCarsInfo());
    for (let i = 0; i < movingCount; i += 1) {
      const carMoveSuccesses = MoveDecider.getCarMoveSuccesses(carCount);
      this.#game.moveCars(carMoveSuccesses);
      OutputView.printCars(this.#game.getCarsInfo());
    }
    OutputView.printWinner(this.#game.getWinner());
  }
}

module.exports = App;
