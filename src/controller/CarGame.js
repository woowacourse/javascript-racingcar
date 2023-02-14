const Car = require('../domain/Car');
const { GAME, MESSAGE } = require('../utils/constants');
const terminalInputValidator = require('../validation/terminalInputValidator');
const { toInt, randomGenerator } = require('../utils/common');

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

  async play() {
    await this.view.output.printStartGame();
    await this.#setCars();
    await this.#setWinningDistance();
    this.#moveCars();
    this.#showResult();
    this.#showWinners();
  }

  async #setCars() {
    const makeCars = (carNames) => {
      carNames.forEach((carName) => {
        this.#cars.push(new Car(carName));
      });
    };
    const input = await this.view.input.readline(MESSAGE.INPUT.carName);
    const carNames = input.split(GAME.nameDivider);
    if (!terminalInputValidator.validateCarNames(carNames)) return this.#setCars();
    makeCars(carNames);
  }

  async #setWinningDistance() {
    this.#winningDistance = toInt(await this.view.input.readline(MESSAGE.INPUT.winningDistance));
    if (!terminalInputValidator.validateWinningDistance(this.#winningDistance))
      return this.#setWinningDistance();
  }

  #getCarMoveCondition() {
    const randomNumber = randomGenerator.getBetween(
      GAME.MOVE_CONDITION.min,
      GAME.MOVE_CONDITION.max,
    );
    return randomNumber > GAME.MOVE_CONDITION.mid;
  }

  #moveCars() {
    this.#cars.forEach((car) => {
      car.move(this.#getCarMoveCondition());
    });
    this.#histories.push(
      this.#cars.map((car) => ({ name: car.getName(), distance: car.getDistance() })),
    );
    if (!this.#cars.some((car) => car.isFinish(this.#winningDistance))) {
      this.#moveCars();
      return;
    }
  }

  #showResult() {
    this.view.output.printResult(this.#histories);
  }

  #showWinners() {
    const winnerNames = this.#cars
      .filter((car) => car.isFinish(this.#winningDistance))
      .map((winner) => winner.getName());
    this.view.output.printWinners(winnerNames);
  }
}
module.exports = CarGame;
