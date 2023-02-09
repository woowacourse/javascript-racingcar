const CarGame = require('../models/CarGame');
const CarNameParser = require('../utils/carNameParser');
const Validator = require('../utils/Validator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class CarGameController {
  #carGame;
  constructor() {
    this.#carGame = new CarGame();
  }

  playGame() {
    this.readCarNames();
  }

  readCarNames() {
    InputView.readCarName().then((input) => {
      try {
        const parseResult = CarNameParser(input);
        Validator.validateLength(parseResult);
        Validator.validateOverLap(parseResult);
        Validator.validateInvalidInput(parseResult);
        this.#carGame.initCarList(parseResult);
        return this.readTryCount();
      } catch (error) {
        OutputView.printError(error.message);
        this.readCarNames();
      }
    });
  }

  readTryCount() {
    InputView.readTryCount().then((input) => {
      try {
        Validator.validateNumericInput(input);
        Validator.validatePositiveNumber(input);
        return this.requestMoveCars(Number(input));
      } catch (error) {
        OutputView.printError(error.message);
        this.readTryCount();
      }
    });
  }

  requestMoveCars(tryCount) {
    this.#carGame.moveCars(tryCount);
    return this.printResult();
  }

  printResult() {
    const carNames = this.#carGame.getCarNames();
    const moveDatas = this.#carGame.getMoveDatas();

    moveDatas.forEach((carMoves) => {
      OutputView.printMoveResult(carNames, carMoves);
    });
  }
}

module.exports = CarGameController;
