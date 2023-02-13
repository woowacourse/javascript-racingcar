const Utils = require("./util/Utils");
const splitAndTrimString = require("./util/SplitAndTrimString");
const { readCarName, readTryCount } = require("./view/InputView");
const {
  printResultMessage,
  printCarMovement,
  printWinner,
} = require("./view/OutputView");
const {
  inputCarNameValidator,
  tryCountValidator,
} = require("./validator/Validator");
const errorCatcher = require("./validator/ErrorCatcher");

const CarGame = require("./domain/CarGame");

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
    this.showGameResult();
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
