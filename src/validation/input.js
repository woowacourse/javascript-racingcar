const OutputView = require('../view/OutputView');
const { GAME, ERROR } = require('../utils/constants');

const handleError = (error) => {
  OutputView.print(error.message);
};

const checkCarNameLength = (carNames) => {
  if (
    !carNames.every(
      (carName) => carName.length >= GAME.CAR_NAME.min && carName.length <= GAME.CAR_NAME.max,
    )
  ) {
    throw new Error(ERROR.carNameLength);
  }
};

const checkDuplicatedCarName = (carNames) => {
  if (carNames.length !== new Set(carNames).size) {
    throw new Error(ERROR.duplicatedCarName);
  }
};

const checkBlankInCarName = (carNames) => {
  if (carNames.some((carName) => carName.includes(GAME.blank))) {
    throw new Error(ERROR.blankInCarName);
  }
};

const validateCarNames = (carNames) => {
  try {
    checkCarNameLength(carNames);
    checkDuplicatedCarName(carNames);
    checkBlankInCarName(carNames);
  } catch (error) {
    handleError(error);
    return false;
  }
  return true;
};

const checkIsBetweenValidRange = (winningDistance) => {
  if (!(GAME.DISTANCE.min <= winningDistance && winningDistance < GAME.DISTANCE.max)) {
    throw new Error(ERROR.invalidWinningDistanceRange);
  }
};

const checkIsInt = (winningDistance) => {
  if (!Number.isInteger(winningDistance)) {
    throw new Error(ERROR.invalidWinningDistanceType);
  }
};

const validateWinningDistance = (winningDistance) => {
  try {
    checkIsInt(winningDistance);
    checkIsBetweenValidRange(winningDistance);
  } catch (error) {
    handleError(error);
    return false;
  }
  return true;
};

module.exports = { validateCarNames, validateWinningDistance };
