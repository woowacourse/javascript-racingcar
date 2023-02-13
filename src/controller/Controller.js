const { StaticValue } = require("../constants/Constants");
const Car = require("../domain/Car");
const RandomNumberGenerator = require("../utils/RandomNumberGenerator");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class Controller {
  #cars = [];

  playGame() {
    this.inputCarNames();
  }

  inputCarNames() {
    InputView.readCarNames(this.setCars.bind(this));
  }

  inputMoveCount() {
    InputView.readMoveCount(this.handleMovementLog.bind(this));
  }

  setCars(cars) {
    this.#cars = cars.map((car) => new Car(car));
    this.inputMoveCount();
  }

  handleMovementLog(moveCount) {
    const COUNT = Number(moveCount);

    for (let i = 0; i < COUNT; i += 1) {
      this.handleCarsMovement();
      OutputView.printEmptyLine();
    }

    this.handleWinners();
  }

  handleCarsMovement() {
    this.#cars.forEach((car) => {
      const RANDOM_NUMBER = RandomNumberGenerator.generate(
        StaticValue.RANDOM_NUMBER_MIN,
        StaticValue.RANDOM_NUMBER_MAX
      );

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
