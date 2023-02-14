const CAR_RULE = require('../constant/carRule');
const MovingDecider = require('../domain/MovingDecider');
const Console = require('../util/console');
const Car = require('../domain/Car');
const RacingCarGame = require('../domain/RacingCarGame');
const InputValidator = require('../validator/InputValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class RacingCarGameController {
  #game;

  play() {
    InputView.readCarName(this.#onSubmitCarName.bind(this));
  }

  #onSubmitCarName(carNames) {
    try {
      InputValidator.checkCarNames(carNames);
      const cars = carNames.split(CAR_RULE.SEPARATOR).map((carName) => new Car(carName));
      this.#game = new RacingCarGame(cars);
      InputView.readMovingCount(this.#onSubmitMovingCount.bind(this));
    } catch (error) {
      OutputView.printError(error.message);
      InputView.readCarName(this.#onSubmitCarName.bind(this));
    }
  }

  #onSubmitMovingCount(movingCount) {
    try {
      InputValidator.checkMovingCount(movingCount);
      this.#printResult(movingCount);
      Console.close();
    } catch (error) {
      OutputView.printError(error.message);
      InputView.readMovingCount(this.#onSubmitMovingCount.bind(this));
    }
  }

  #printResult(movingCount) {
    OutputView.printResultTitle();
    OutputView.printCars(this.#game.getCarsInfo());
    for (let i = 0; i < movingCount; i += 1) {
      this.#game.moveCars(MovingDecider.getCarsMovingSuccesses(this.#game.getCountOfCars()));
      OutputView.printCars(this.#game.getCarsInfo());
    }
    OutputView.printWinner(this.#game.getWinner());
  }
}

module.exports = RacingCarGameController;
