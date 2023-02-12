const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Car = require('../domain/Car');
const { GAME, INPUT, OUTPUT, OUTPUT_RESULT, OUTPUT_WINNER } = require('../constant/constants');
const { validateCarNames, validateWinningDistance } = require('../validation/input.js');
const common = require('../utils/common');

class RacingGame {
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
    this.#winningDistance = common.toInt(await InputView.readline(INPUT.winningDistance));
    if (!validateWinningDistance(this.#winningDistance)) return this.setWinningDistance();
    this.moveCars();
  }

  moveCars() {
    this.#cars.forEach((car) =>
      car.move(
        common.generateRandomNumberInRange(GAME.MOVE_CONDITION.min, GAME.MOVE_CONDITION.max),
      ),
    );
    this.#histories.push(
      this.#cars.map((car) => ({ name: car.getName(), distance: car.getDistance() })),
    );
    if (!this.#cars.some((car) => car.getDistance() >= this.#winningDistance)) {
      this.moveCars();
      return;
    }
    this.#showResult();
  }

  #showResult() {
    OutputView.print(OUTPUT.resultMent);
    this.#histories.forEach((history) => {
      history.forEach((car) => {
        OutputView.print(OUTPUT_RESULT(car));
      });
      OutputView.print('');
    });
    this.showWinners();
  }

  showWinners() {
    const winners = this.#cars.filter((car) => car.getDistance() >= this.#winningDistance);
    OutputView.print(OUTPUT_WINNER(winners));
  }
}
module.exports = RacingGame;
