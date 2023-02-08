const InputView = require('../view/InputView.js');
const OutputView = require('../view/OutputView.js');
const Validator = require('../utils/Validator.js');
const RacingCar = require('../model/RacingCar.js');
const Util = require('../utils/Util.js');
const { UTIL_NUMBER } = require('../data/constants.js');

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
    }
  }
}

module.exports = RacingController;
