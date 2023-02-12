const { GAME, INPUT, OUTPUT, OUTPUT_RESULT, OUTPUT_WINNER } = require('../constant/constants');
const { validateCarNames, validateWinningDistance } = require('../validation/inputValidator.js');
const common = require('../utils/common');

class RacingGameController {
  #service;
  #input;
  #output;
  #winningDistance;

  constructor(service, view) {
    this.#service = service;
    this.#input = view.input;
    this.#output = view.output;
  }

  async playGame() {
    this.#output.print(OUTPUT.startGame);
    await this.#setCars();
    await this.#setWinningDistance();
    this.#setCars();
    this.#setWinningDistance();
    this.#startRacing();
  }

  async #setCars() {
    const input = await this.#input.readline(INPUT.carName);
    const carNames = input.split(GAME.nameDivider);
    if (!validateCarNames(carNames)) return this.#setCars();
    this.#service.makeCars(carNames);
  }

  async #setWinningDistance() {
    this.#winningDistance = common.toInt(await this.#input.readline(INPUT.winningDistance));
    if (!validateWinningDistance(this.#winningDistance)) return this.#setWinningDistance();
  }

  #startRacing() {
    this.#service.moveCars();
    this.#isFinishGame(this.#service.getCars());
  }

  #isFinishGame(cars) {
    if (!cars.some((car) => this.#pickOutWinner(car))) {
      this.#startRacing();
      return;
    }
    this.#showResult();
  }

  #pickOutWinner(car) {
    return car.getDistance() >= this.#winningDistance;
  }

  #showResult() {
    this.#output.print(OUTPUT.resultMent);
    this.#service.getCarsMoveRecord().forEach((history) => {
      this.#showCarsMoveHistory(history);
    });
    this.#showWinners();
  }

  #showCarsMoveHistory(history) {
    history.forEach((car) => {
      this.#output.print(OUTPUT_RESULT(car));
    });
    this.#output.print(GAME.newLine);
  }

  #showWinners() {
    const winners = this.#service.getCars().filter((car) => this.#pickOutWinner(car));
    this.#output.print(OUTPUT_WINNER(winners));
    this.#input.closeRead();
  }
}
module.exports = RacingGameController;
