const Car = require('../model/Car');
const Utils = require('../utils/Utils');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const { StaticValue } = require('../constants/constants');

class Controller {
  #cars = [];

  playGame() {
    this.inputCarNames();
  }

  inputCarNames() {
    InputView.readCarNames((cars) => {
      this.#cars = cars.map((car) => new Car(car));
      this.inputMoveCount();
    });
  }

  inputMoveCount() {
    InputView.readMoveCount((moveCount) => {
      for (let i = 0; i < moveCount; i += 1) {
        this.handleCarsMovement();
        OutputView.printEmptyLine();
      }

      this.handleWinners();
    });
  }

  handleCarsMovement() {
    this.#cars.forEach((car) => {
      const RANDOM_NUMBER = Utils.generateRandomNumber();

      if (RANDOM_NUMBER >= StaticValue.MOVE_CONDITION) car.move();

      OutputView.printMoveDistance(car.getName(), car.getCurrentDistance());
    });
  }

  handleWinners() {
    const CARS_DISTANCE = this.#cars.map((car) => car.getCurrentDistance());
    const MAX_DISTANCE = Math.max(...CARS_DISTANCE);
    const WINNERS = this.#cars
      .filter((car) => car.getCurrentDistance() === MAX_DISTANCE)
      .map((car) => car.getName());

    OutputView.printWinner(WINNERS);
  }
}

module.exports = Controller;
