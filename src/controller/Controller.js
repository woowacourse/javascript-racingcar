const Car = require("../model/Car");
const RandomMaker = require("../utils/RandomMaker");
const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");
const { RANDOM } = require("../utils/Constant");

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

  moveCars(tryNumber, getRandom = RandomMaker.RandomMinMax) {
    Array.from({ length: tryNumber }, () => {
      this.#cars.forEach((car) =>
        car.decideGoAndStop(getRandom(RANDOM.MAXNUMBER, RANDOM.MINNUMBER))
      );
      this.printCarsMove();
    });
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
