const { readCarName, readTryCount } = require("./UI/InputView");
const {
  printResultMessage,
  printCarMovement,
  printWinner,
} = require("./UI/OutputView");
const { COMMA } = require("./Utils/Constants");
const Utils = require("./Utils/Utils");
const isMoving = require("./MovementIndicator");
const {
  inputCarNameValidator,
  tryCountValidator,
} = require("./Utils/Validator");

class App {
  #carStatus;
  #round;

  play() {
    readCarName(this.inputCarNameCallback);
  }

  tryCatch(validator, callback) {
    try {
      validator();
    } catch (error) {
      Utils.print(error);
      callback();
      return false;
    }
    return true;
  }

  inputCarNameCallback = (names) => {
    const cars = names.split(COMMA).map((name) => name.trim());
    const isValidate = this.tryCatch(
      () => inputCarNameValidator(cars),
      () => readCarName(this.inputCarNameCallback)
    );

    if (!isValidate) return;

    this.#carStatus = this.initializeCarStatus(cars);
    readTryCount(this.readTryCountCallback);
  };

  initializeCarStatus = (cars) => {
    const carStatus = {};
    cars.forEach((car) => (carStatus[car] = 0));

    return carStatus;
  };

  readTryCountCallback = (count) => {
    const isValidate = this.tryCatch(
      () => tryCountValidator(count),
      () => readTryCount(this.readTryCountCallback)
    );

    if (!isValidate) return;

    this.#round = count;
    this.showGameResult();
  };

  showGameResult = () => {
    printResultMessage();

    for (let idx = 0; idx < this.#round; idx++) {
      this.#carStatus = this.cycleCarStatus(this.#carStatus);
      printCarMovement(this.#carStatus);
    }

    printWinner(this.findWinner(this.#carStatus));
    Utils.close();
  };

  cycleCarStatus(carStatus) {
    for (const [name, count] of Object.entries(carStatus)) {
      if (isMoving()) carStatus[name] = count + 1;
    }
    return carStatus;
  }

  findWinner(carStatus) {
    const max = Math.max(...Object.values(carStatus));
    const winnerInfo = Object.entries(carStatus).filter(
      ([_, count]) => count === max
    );

    return winnerInfo.map(([name]) => name).join(COMMA);
  }
}

module.exports = App;
