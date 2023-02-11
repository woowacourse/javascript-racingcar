const { CAR_RULE } = require('../constants/rule');
const Console = require('../utils/console');
const Car = require('../models/Car');
const RacingCarGame = require('../models/RacingCarGame');
const { CharacterValidator, ArrayValidator, NumberValidator } = require('../utils/Validator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');
const { ERROR_MESSAGE } = require('../constants/message');

class RacingCarGameController {
  #game;

  play() {
    InputView.readCarName(this.#onCarNameSubmit.bind(this));
  }

  #onCarNameSubmit(carNames) {
    try {
      this.#validateCarNames(carNames);
      const cars = carNames.split(CAR_RULE.separator).map((carName) => new Car(carName));
      this.#game = new RacingCarGame(cars);
      InputView.readMovingCount(this.#onMovingCountSubmit.bind(this));
    } catch (error) {
      OutputView.printError(error.message);
      InputView.readCarName(this.#onCarNameSubmit.bind(this));
    }
  }

  #validateCarNames(carNames) {
    const cars = carNames.split(CAR_RULE.separator);
    if (!this.#isAllowedCarNames(cars)) {
      throw new Error(ERROR_MESSAGE.nameCharacter);
    }
    if (!ArrayValidator.isLengthMoreThanOne(cars)) {
      throw new Error(ERROR_MESSAGE.nameSeparator);
    }
    if (ArrayValidator.isDuplicated(cars)) {
      throw new Error(ERROR_MESSAGE.duplicatedCarName);
    }
  }

  #isAllowedCarNames(carNames) {
    return carNames.every((carName) => this.#isAllowedCharacter(carName));
  }

  #isAllowedCharacter(carName) {
    return (
      CharacterValidator.isOnlyAlphabet(carName) ||
      CharacterValidator.isOnlyKorean(carName) ||
      CharacterValidator.isAlphabetOrKorean(carName)
    );
  }

  #onMovingCountSubmit(movingCount) {
    try {
      this.#validateMovingCount(movingCount);
      this.#printResult(movingCount);
      Console.close();
    } catch (error) {
      OutputView.printError(error.message);
      InputView.readMovingCount(this.#onMovingCountSubmit.bind(this));
    }
  }

  #validateMovingCount(movingCount) {
    if (!NumberValidator.isNaturalNumber(movingCount)) {
      throw new Error(ERROR_MESSAGE.movingCount);
    }
  }

  #printResult(movingCount) {
    OutputView.printResultTitle();
    OutputView.printCars(this.#game.getCarsInfo());
    for (let i = 0; i < movingCount; i += 1) {
      this.#game.moveCars();
      OutputView.printCars(this.#game.getCarsInfo());
    }
    OutputView.printWinner(this.#game.getWinner());
  }
}

module.exports = RacingCarGameController;
