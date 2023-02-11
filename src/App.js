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
  #game = new CarGame();
  #round = 0;

  play() {
    readCarName(this.acceptCarNames);
  }

  acceptCarNames = (names) => {
    const carNames = splitAndTrimString(names);

    errorCatcher(
      () => inputCarNameValidator(carNames),
      () => readCarName(this.acceptCarNames),
      () => this.acceptValidCarNames(carNames)
    );
  };

  acceptValidCarNames(carNames) {
    this.#game.initializeCarStatus(carNames);
    readTryCount(this.acceptTryCount);
  }

  acceptTryCount = (count) => {
    errorCatcher(
      () => tryCountValidator(count),
      () => readTryCount(this.acceptTryCount),
      () => this.acceptValidTryCount(count)
    );
  };

  acceptValidTryCount(count) {
    this.#round = count;
    this.showGameResult(count);
  }

  playRounds = () => {
    for (let idx = 0; idx < this.#round; idx++) {
      const currentCarStatus = this.#game.moveCar();

      printCarMovement(currentCarStatus);
    }
  };

  showGameResult = () => {
    printResultMessage();
    this.playRounds();
    printWinner(this.#game.findWinner());

    Utils.close();
  };
}

module.exports = App;
