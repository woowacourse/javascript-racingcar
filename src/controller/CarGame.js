const Car = require('../model/Car');
const { GAME, MESSAGE } = require('../utils/constants');
const { validateCarNames, validateWinningDistance } = require('../validation/input.js');
const { toInt } = require('../utils/common');

class CarGame {
  #cars;
  #winningDistance;
  #histories;

  constructor(view) {
    this.#cars = [];
    this.#winningDistance = 0;
    this.#histories = [];
    this.view = view;
  }

  play() {
    this.view.output.printStartGame();
    this.#setCars();
  }

  async #setCars() {
    const input = await this.view.input.readline(MESSAGE.INPUT.carName);
    const carNames = input.split(GAME.nameDivider);
    if (!validateCarNames(carNames)) return this.#setCars();
    this.#makeCars(carNames);
  }

  async #makeCars(carNames) {
    carNames.forEach((carName) => {
      this.#cars.push(new Car(carName));
    });
    this.#setWinningDistance();
  }

  async #setWinningDistance() {
    this.#winningDistance = toInt(await this.view.input.readline(MESSAGE.INPUT.winningDistance));
    if (!validateWinningDistance(this.#winningDistance)) return this.#setWinningDistance();
    this.#moveCars();
  }

  #moveCars() {
    this.#cars.forEach((car) => car.move());
    this.#histories.push(
      this.#cars.map((car) => ({ name: car.getName(), distance: car.getDistance() })),
    );
    if (!this.#cars.some((car) => car.isFinish(this.#winningDistance))) {
      this.#moveCars();
      return;
    }
    this.#showResult();
  }

  #showResult() {
    this.view.output.printResult(this.#histories);
    this.#showWinners();
  }

  #showWinners() {
    const winnerNames = this.#cars
      .filter((car) => car.isFinish(this.#winningDistance))
      .map((winner) => winner.getName());
    this.view.output.printWinners(winnerNames);
  }
}
module.exports = CarGame;
