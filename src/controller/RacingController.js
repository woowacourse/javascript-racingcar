const InputView = require('../view/InputView.js');
const OutputView = require('../view/OutputView.js');
const Validator = require('../utils/Validator.js');
const RacingCar = require('../model/RacingCar.js');
const Util = require('../utils/Util.js');
const { UTIL_NUMBER } = require('../data/constants.js');
const IO = require('../utils/IO.js');

class RacingController {
  #cars;
  #tryCount;

  constructor() {
    this.#cars = [];
  }

  inputCarName() {
    InputView.readCarName((carNames) => {
      const carArr = carNames.split(',');
      Validator.validateCarNames(carArr);

      carArr.forEach((carName) => {
        this.#cars.push(new RacingCar(carName));
      });
      this.inputTryCount();
    });
  }

  inputTryCount() {
    InputView.readTryCount((tryCount) => {
      Validator.validateTryCount(tryCount);
      this.#tryCount = tryCount;
      OutputView.printWhiteSpace();
      this.repeatProcess();
    });
  }

  assignRandom() {
    this.#cars.forEach((car) => {
      const randomValue = Util.randomValue();
      if (randomValue >= UTIL_NUMBER.CAR_MOVE_MINIMUM_NUMBER) {
        car.move();
      }
    });
    OutputView.printMoveProcess(this.#cars);
  }

  repeatProcess() {
    OutputView.printMoveResult();
    OutputView.printMoveProcess(this.#cars);
    for (let i = 0; i < this.#tryCount; i++) {
      this.assignRandom();
      if (i === this.#tryCount - 1) {
        const carsMoveResults = new Map();
        this.#cars.forEach((car) => {
          carsMoveResults.set(car.getCarName(), car.getMoveCount());
        });

        const maxValue = [...carsMoveResults.entries()].reduce((a, b) =>
          a[1] > b[1] ? a : b
        )[1];

        const winnerList = [...carsMoveResults.entries()]
          .filter((el) => el[1] === maxValue)
          .map((el) => el[0]);

        OutputView.printWinner(winnerList);
      }
    }
    this.quitGame();
  }

  quitGame() {
    IO.close();
  }
}

module.exports = RacingController;
