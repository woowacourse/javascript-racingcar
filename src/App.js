const Car = require('./domain/Car');
const { CAR_RULE } = require('./domain/constants/rule');
const RacingCarGame = require('./domain/RacingCarGame');
const { validateCarNames, validateMovingCount } = require('./domain/validators');
const Console = require('./utils/console');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

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

module.exports = App;
