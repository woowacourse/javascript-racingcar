const Car = require("../model/Car");
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
    const nameOfCars = await InputView.readCarName();
    this.setCar(nameOfCars);
  }

  setCar(carName) {
    for (let len = 0; len < carName.length; len++) {
      let car = new Car();
      car.inputName(carName[len]);
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
    this.showWinners(this.#winners)
  }

  showWinners(winner){
    OutputView.printWinners(winner);
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

  getWinner() {
    return this.#winners;
  }
}

module.exports = RacingGame;
