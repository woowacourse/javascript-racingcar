const Car = require("../model/Car");
const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");
const { RANDOM } = require("../utils/Constant");

class RacingGame {
  #cars;
  #winners;
  #maxPosition;

  constructor() {
    this.#cars = [];
    this.#winners = [];
    this.#maxPosition = 0;
  }

  start() {
    InputView.inputCarName((answer) => {
      const nameOfCars = answer.split(",");

      this.makeCar(nameOfCars);
    });
  }

  makeCar(carNames) {
    for (let len = 0; len < carNames.length; len++) {
      let car = new Car();
      car.inputName(carNames[len]);
      this.#cars.push(car);
    }

    this.makeNumber();
  }

  makeNumber() {
    InputView.inputNumber((answer) => {
      let tryNumber = Number(answer);
      this.makeCarMove(tryNumber);
    });
  }

  makeCarMove(tryNumber) {
    for (let num = 0; num < tryNumber; num++) {
      this.moveCar();
      OutputView.printCarMove(this.#cars);
    }
    this.whoIsWinners(this.#cars);
    OutputView.printWinners(this.#winners);
  }

  moveCar() {
    for (let car of this.#cars) {
      car.decideGoAndStop(this.getRandomNumber());
    }
  }

  getRandomNumber() {
    return Math.floor(
      Math.random() * (RANDOM.MAXNUMBER - RANDOM.MINNUMBER) + RANDOM.MINNUMBER
    );
  }

  whoIsWinners(cars) {
    for (let car of cars) {
      this.comparedCars(car);
    }
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

  getWinner() {
    return this.#winners;
  }
}

module.exports = RacingGame;
