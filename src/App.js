const Car = require('./domain/Car');
const inputDataParseAndSplit = require('./utils/inputDataParseAndSplit');
const functionPipe = require('./utils/funcitonPipe');
const getObjectsName = require('./utils/getObjectsNames');
const getRandomNumber = require('./utils/getRandomNumber');
const Validator = require('./utils/Validator');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const isBiggerThanStandard = require('./utils/isBiggerThanStandard');

class App {
  #carList = [];
  #moveList = [];

  play() {
    this.readCarNames();
  }

  readCarNames() {
    InputView.readCarName().then((input) => {
      try {
        const parsedCarName = inputDataParseAndSplit(input);
        functionPipe(parsedCarName, Validator.validateLength, Validator.validateOverLap, Validator.validateInvalidInput);
        return this.saveCarDatas(parsedCarName);
      } catch (error) {
        OutputView.printError(error.message);
        this.readCarNames();
      }
    });
  }

  saveCarDatas(parsedCarName) {
    parsedCarName.forEach((carName) => {
      this.#carList.push(new Car(carName));
    });
    return this.readTryCount();
  }

  readTryCount() {
    InputView.readTryCount().then((input) => {
      try {
        functionPipe(input, Validator.validateNumericInput, Validator.validatePositiveNumber);
        return this.moveCars(Number(input));
      } catch (error) {
        OutputView.printError(error.message);
        this.readTryCount();
      }
    });
  }

  moveCars(tryCount) {
    for (let count = 0; count < tryCount; count++) {
      const moveData = [];
      this.#carList.forEach((car) => {
        const carState = car.move(getRandomNumber(), isBiggerThanStandard);
        moveData.push(carState);
      });
      this.#moveList.push([...moveData]);
    }
    return this.printResult();
  }

  printResult() {
    const carNames = getObjectsName(this.#carList);
    this.#moveList.forEach((carMoves) => {
      OutputView.printMoveResult(carNames, carMoves);
    });

    return this.getWinnerList();
  }

  getWinnerList() {
    let maxDistance = 0;
    let winners = [];

    this.#carList.forEach((car) => {
      if (car.getState() === maxDistance) winners.push(car.getName());
      if (car.getState() > maxDistance) {
        winners = [];
        winners.push(car.getName());
        maxDistance = car.getState();
      }
    });
    return this.printWinners(getObjectsName(this.#carList), this.#moveList[this.#moveList.length - 1], winners);
  }

  printWinners(carNames, carMoves, winnerList) {
    OutputView.printMoveResult(carNames, carMoves);
    OutputView.printWinner(winnerList);
    return this.gameEnd();
  }

  gameEnd() {
    OutputView.closeConsole();
  }
}

const app = new App();
app.play();

module.exports = App;
