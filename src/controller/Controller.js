const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Car = require('../model/Car');
const { GAME, INPUT, OUTPUT } = require('../utils/constants');
const { validateCarNames } = require('../validation/input.js');

class Controller {
  #cars;
  #winningDistance;
  #histories;

  constructor() {
    this.#cars = [];
    this.#winningDistance = 0;
    this.#histories = [];
  }

  play() {
    OutputView.print(OUTPUT.startGame);
    this.setCars();
  }

  async setCars() {
    const input = await InputView.readline(INPUT.carName);
    const carNames = input.split(GAME.nameDivider);
    if (!validateCarNames(carNames)) return this.setCars();
    this.makeCars(carNames);
  }

  async makeCars(carNames) {
    carNames.forEach((carName) => {
      this.#cars.push(new Car(carName));
    });
    this.setWinningDistance();
  }

  async setWinningDistance() {
    this.#winningDistance = await InputView.readline(INPUT.winningDistance);
    this.moveCars();
  }

  moveCars() {
    this.#cars.forEach((car) => car.move());
    this.#histories.push(
      this.#cars.map((car) => ({ name: car.getName(), distance: car.getDistance() })),
    );
    if (!this.#cars.some((car) => car.isFinish(this.#winningDistance))) {
      this.moveCars();
      return;
    }
    this.#showResult();
  }

  #showResult() {
    this.#histories.forEach((history) => {
      history.forEach((car) => {
        OutputView.print(OUTPUT.result(car));
      });
    });
    this.showWinners();
  }

  showWinners() {
    const winners = this.#cars.filter((car) => car.isFinish(this.#winningDistance));
    OutputView.print(OUTPUT.winner(winners));
  }
}
module.exports = Controller;
