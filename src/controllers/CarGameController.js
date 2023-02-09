const CarGame = require('../models/CarGame');
const CarNameParse = require('../utils/CarNameParse');
const functionPipe = require('../utils/funcitonPipe');
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
        const parsedCarName = CarNameParse(input);
        functionPipe(parsedCarName, Validator.validateLength, Validator.validateOverLap, Validator.validateInvalidInput);
        return this.saveCarDatas(parsedCarName);
      } catch (error) {
        OutputView.printError(error.message);
        this.readCarNames();
      }
    });
  }

  saveCarDatas(parsedCarName) {
    this.#carGame.initCarList(parsedCarName);
    return this.readTryCount();
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
    return this.printWinners(carNames, moveDatas[moveDatas.length - 1]);
  }

  printWinners(carNames, carMoves) {
    const winnerList = this.#carGame.getWinners();
    OutputView.printMoveResult(carNames, carMoves);
    OutputView.printWinner(winnerList);
    return this.gameEnd();
  }

  gameEnd() {
    OutputView.closeConsole();
  }
}

module.exports = CarGameController;
