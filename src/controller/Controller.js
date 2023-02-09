const Car = require("../model/Car.js");
const RandomNumberGenerator = require("../utils/RandomNumberGenerator.js");
const InputView = require("../view/InputView.js");
const OutputView = require("../view/OutputView.js");

class Controller {
  #cars = [];

  constructor() {}

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
    for (let i = 0; i < this.#cars.length; i++) {
      const randomNumber = RandomNumberGenerator.generate();
      const currentCar = this.#cars[i];

      currentCar.move(randomNumber);
      OutputView.printMoveDistance(
        currentCar.getName(),
        currentCar.getCurrentDistance()
      );
    }
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
