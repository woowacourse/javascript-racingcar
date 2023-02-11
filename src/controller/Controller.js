const Car = require("../model/Car");
const OutputView = require("../views/OutputView");
const { RANDOM } = require("../utils/Constant");
const InputView = require("../views/InputView");

class Controller {
  #cars;
  #winners;
  #maxPosition;

  constructor() {
    this.#cars = [];
    this.#winners = [];
    this.#maxPosition = 0;
  }

  makeCars(carNames) {
    carNames.forEach((name) => {
      let car = new Car(name);
      this.#cars.push(car);
    });
  }

  moveCars(tryNumber) {
    for (let num = 0; num < tryNumber; num++) {
      this.#cars.forEach((car) => car.decideGoAndStop(this.getRandomNumber()));
      this.printCarsMove();
    }
  }

  getRandomNumber() {
    return Math.floor(
      Math.random() * (RANDOM.MAXNUMBER - RANDOM.MINNUMBER) + RANDOM.MINNUMBER
    );
  }

  whoIsWinners() {
    this.#cars.forEach((car) => this.comparedCars(car));
  }

  comparedCars(car) {
    if (this.#maxPosition === car.getPosition())
      this.#winners.push(car.getName());

    if (this.#maxPosition < car.getPosition()) {
      this.#maxPosition = car.getPosition();
      this.#winners = [];
      this.#winners.push(car.getName());
    }
  }

  printCarsMove() {
    OutputView.printCarMove(this.#cars);
  }

  printWinners() {
    OutputView.printWinners(this.#winners);
  }

  quit() {
    InputView.close();
  }

  get winners() {
    return this.#winners;
  }
}

module.exports = Controller;
