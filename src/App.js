const Utils = require("./Utils/Utils");
const splitAndTrimString = require("./Utils/SplitAndTrimString");
const { readCarName, readTryCount } = require("./UI/InputView");
const {
  printResultMessage,
  printCarMovement,
  printWinner,
} = require("./UI/OutputView");
const {
  inputCarNameValidator,
  tryCountValidator,
} = require("./Validator/Validator");
const { errorCatcher } = require("./Validator/ErrorCatcher");

const CarGame = require("./Domain/CarGame");

class App {
  #games = new CarGame();
  #round = 0;

  play() {
    readCarName(this.inputCarNameCallback);
  }

  inputCarNameCallback = (names) => {
    const cars = splitAndTrimString(names);

    errorCatcher(
      () => inputCarNameValidator(cars),
      () => readCarName(this.inputCarNameCallback),
      () => this.acceptValidCarNames(cars)
    );
  };

  acceptValidCarNames(cars) {
    this.#game.initializeCarStatus(cars);
    readTryCount(this.acceptTryCount);
  }

  readTryCountCallback = (count) => {
    errorCatcher(
      () => tryCountValidator(count),
      () => readTryCount(this.readTryCountCallback),
      () => this.acceptValidTryCount(count)
    );
  };

  acceptValidTryCount(count) {
    this.#round = count;
    this.showGameResult(count);
  }

  showGameResult = () => {
    printResultMessage();
    this.showGameRound();
    printWinner(this.#games.findWinner(this.#games.getCarStatus()));
    Utils.close();
  };

  showGameRound = () => {
    for (let idx = 0; idx < this.#round; idx++) {
      const currentCarStatus = this.#games.cycleCarStatus(
        this.#games.getCarStatus()
      );

      printCarMovement(currentCarStatus);
    }
  };
}

module.exports = App;
