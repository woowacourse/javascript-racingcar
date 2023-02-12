const CarGame = require('../domain/CarGame');
const parseCarName = require('../domain/parseCarName');
const functionPipe = require('../utils/funcitonPipe');
const getRandomNumber = require('../utils/getRandomNumber');
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
    InputView.readCarNames().then((input) => {
      try {
        const parsedCarNames = parseCarName(input);
        functionPipe(
          parsedCarNames,
          Validator.validateLength,
          Validator.validateOverlap,
          Validator.validateInvalidInput,
        );
        return this.saveCarDatas(parsedCarNames);
      } catch (error) {
        OutputView.printError(error.message);
        this.readCarNames();
      }
    });
  }

  saveCarDatas(parsedCarNames) {
    this.#carGame.initCarList(parsedCarNames);
    this.readTryCount();
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
    this.#carGame.moveCars(tryCount, getRandomNumber);
    this.printResult();
  }

  printResult() {
    const carNames = this.#carGame.getCarNames();
    const moveDatas = this.#carGame.getMoveDatas();

    moveDatas.forEach((carMoves) => {
      OutputView.printMoveResult(carNames, carMoves);
    });

    this.printWinners(carNames, moveDatas[moveDatas.length - 1]);
  }

  printWinners(carNames, carMoves) {
    const winnerList = this.#carGame.getWinners();

    OutputView.printMoveResult(carNames, carMoves);
    OutputView.printWinner(winnerList);

    this.gameEnd();
  }

  gameEnd() {
    OutputView.closeConsole();
  }
}

module.exports = CarGameController;
