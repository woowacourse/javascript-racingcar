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
    const count = Number(moveCount);

    for (let i = 0; i < count; i += 1) {
      this.handleCarsMovement();
      OutputView.printEmptyLine();
    }

    this.handleWinners();
  }

  handleCarsMovement() {
    this.#cars.forEach((car) => {
      const randomNumber = RandomNumberGenerator.generate(
        StaticValue.RANDOM_NUMBER_MIN,
        StaticValue.RANDOM_NUMBER_MAX
      );

      if (randomNumber >= StaticValue.MOVE_CONDITION) car.move();

      OutputView.printMoveDistance(car.getName(), car.getCurrentDistance());
    });
  }

  handleWinners() {
    const carsDistance = this.#cars.map((car) => car.getCurrentDistance());
    const maxDistance = Math.max(...carsDistance);
    const winners = this.#cars
      .filter((car) => car.getCurrentDistance() === maxDistance)
      .map((car) => car.getName());

    OutputView.printWinner(winners);
  }
}

module.exports = Controller;
