const Car = require("../domain/Car");
const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");
const RandomNumberGenerator = require("../utils/RandomNumberGenerator")
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

  async inputName(){
    const carsName = await InputView.readCarName();
    this.setCar(carsName);
  }

  setCar(name) {
    for (let len = 0; len < name.length; len++) {
      let car = new Car();
      car.inputName(name[len]);
      this.#cars.push(car);
    }

    this.inputNumber();
  }

  async inputNumber() {
    const tryNumber = Number (await InputView.readNumber());
    this.race(tryNumber)
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
      car.decideGoAndStop(RandomNumberGenerator.makeRandomNumber());
    }
  }

  whoIsWinners() {
    for (let car of this.#cars) {
      this.findWinners(car);
    }
    this.showWinners()
  }

  showWinners(){
    OutputView.printWinners(this.#winners);
  }

  findWinners(car) {
    if (this.#maxPosition === car.getPosition())
      this.#winners.push(car.getName());

    if (this.#maxPosition < car.getPosition()) {
      this.#maxPosition = car.getPosition();
      this.#winners = [];
      this.#winners.push(car.getName());
    }
  }
}

module.exports = RacingGame;
