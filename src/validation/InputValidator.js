const { GAME, ERROR } = require('../utils/constants');

class InputValidator {
  constructor(handleError) {
    this.handleError = handleError;
  }

  checkCarNameLength(carNames) {
    if (
      !carNames.every(
        (carName) => carName.length >= GAME.CAR_NAME.min && carName.length <= GAME.CAR_NAME.max,
      )
    ) {
      throw new Error(ERROR.carNameLength);
    }
  }

  checkDuplicatedCarName(carNames) {
    if (carNames.length !== new Set(carNames).size) {
      throw new Error(ERROR.duplicatedCarName);
    }
  }

  checkBlankInCarName(carNames) {
    if (carNames.some((carName) => carName.includes(GAME.blank))) {
      throw new Error(ERROR.blankInCarName);
    }
  }

  validateCarNames(carNames) {
    try {
      this.checkCarNameLength(carNames);
      this.checkDuplicatedCarName(carNames);
      this.checkBlankInCarName(carNames);
    } catch (error) {
      this.handleError(error);
      return false;
    }
    return true;
  }

  checkIsBetweenValidRange(winningDistance) {
    if (!(GAME.DISTANCE.min <= winningDistance && winningDistance < GAME.DISTANCE.max)) {
      throw new Error(ERROR.invalidWinningDistanceRange);
    }
  }

  checkIsInt(winningDistance) {
    if (!Number.isInteger(winningDistance)) {
      throw new Error(ERROR.invalidWinningDistanceType);
    }
  }

  validateWinningDistance(winningDistance) {
    try {
      this.checkIsInt(winningDistance);
      this.checkIsBetweenValidRange(winningDistance);
    } catch (error) {
      this.handleError(error);
      return false;
    }
    return true;
  }
}

module.exports = InputValidator;
