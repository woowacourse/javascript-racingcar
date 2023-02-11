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
    this.inputName();
  }

  inputName(){
    InputView.readCarName((answer) => {
      const nameOfCars = answer.split(",");

      this.setCar(nameOfCars);
    });
  }

  setCar(carName) {
    for (let len = 0; len < carName.length; len++) {
      let car = new Car();
      car.inputName(carName[len]);
      this.#cars.push(car);
    }

    this.inputNumber();
  }

  inputNumber() {
    InputView.readNumber((answer) => {
      let tryNumber = Number(answer);
      this.race(tryNumber);
    });
  }

  race(tryNumber) {
    Array.from({length:tryNumber}, ()=>{
      this.runCar();
      OutputView.printCarMove(this.#cars);
    })
    this.whoIsWinners();
  }

  runCar() {
    for (let car of this.#cars) {
      car.decideGoAndStop(this.getRandomNumber());
    }
  }

  getRandomNumber() {
    return Math.floor(
      Math.random() * (RANDOM.MAXNUMBER - RANDOM.MINNUMBER) + RANDOM.MINNUMBER
    );
  }

  whoIsWinners() {
    for (let car of this.#cars) {
      this.comparedCars(car);
    }
    this.showWinners(this.#winners)
  }

  showWinners(winner){
    OutputView.printWinners(winner);
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
