const InputView = require('../view/InputView');
const Car = require('../model/Car');
const { GAME, MESSAGE } = require('../utils/constants');
const { validateCarNames, validateWinningDistance } = require('../validation/input.js');
const { toInt } = require('../utils/common');
const { printStartGame, printResult, printWinners } = require('../view/OutputView');

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
    printStartGame();
    this.#setCars();
  }

  async #setCars() {
    const input = await InputView.readline(MESSAGE.INPUT.carName);
    const carNames = input.split(GAME.nameDivider);
    if (!validateCarNames(carNames)) return this.#setCars();
    this.#makeCars(carNames);
  }

  async #makeCars(carNames) {
    carNames.forEach((carName) => {
      this.#cars.push(new Car(carName));
    });
    this.setWinningDistance();
  }

  async setWinningDistance() {
    this.#winningDistance = toInt(await InputView.readline(MESSAGE.INPUT.winningDistance));
    if (!validateWinningDistance(this.#winningDistance)) return this.setWinningDistance();
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
    printResult(this.#histories);
    this.#showWinners();
  }

  #showWinners() {
    const winnerNames = this.#cars
      .filter((car) => car.isFinish(this.#winningDistance))
      .map((winner) => winner.getName());
    printWinners(winnerNames);
  }
}
module.exports = Controller;
