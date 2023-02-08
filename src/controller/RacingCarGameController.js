const Car = require('../models/Car');
const RacingCarGame = require('../models/RacingCarGame');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
class RacingCarGameController {
  #game;

  play() {
    InputView.readCarName(this.#onCarNameSubmit.bind(this));
  }

  #onCarNameSubmit(carNames) {
    const cars = carNames.split(',').map((carName) => new Car(carName));
    this.#game = new RacingCarGame(cars);
    InputView.readMovingCount(this.#onMovingCountSubmit.bind(this));
  }

  #onMovingCountSubmit(movingCount) {
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
