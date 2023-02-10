const OutputView = require('../view/OutputView');
const { GAME, ERROR } = require('../constant/constants');

const handleError = (errorMessage) => {
  try {
    throw new Error(errorMessage);
  } catch (error) {
    OutputView.print(error.message);
  }
  return false;
};

const checkCarNameLength = (carNames) => {
  if (
    !carNames.every(
      (carName) => carName.length >= GAME.CAR_NAME.min && carName.length <= GAME.CAR_NAME.max,
    )
  ) {
    return handleError(ERROR.carNameLength);
  }
  return true;
};

const checkDuplicatedCarName = (carNames) => {
  if (carNames.length !== new Set(carNames).size) {
    return handleError(ERROR.duplicatedCarName);
  }
  return true;
};

const checkBlankInCarName = (carNames) => {
  if (carNames.some((carName) => carName.includes(GAME.blank))) {
    return handleError(ERROR.blankInCarName);
  }
  return true;
};

const validateCarNames = (carNames) => {
  return (
    checkCarNameLength(carNames) &&
    checkDuplicatedCarName(carNames) &&
    checkBlankInCarName(carNames)
  );
};

const checkIsBetweenValidRange = (winningDistance) => {
  if (!(GAME.DISTANCE.min <= winningDistance && winningDistance < GAME.DISTANCE.max)) {
    return handleError(ERROR.invalidWinningDistanceRange);
  }
  return true;
};

const checkIsInt = (winningDistance) => {
  if (Number.isNaN(winningDistance)) {
    return handleError(ERROR.invalidWinningDistanceType);
  }
  return true;
};

const validateWinningDistance = (winningDistance) => {
  return checkIsInt(winningDistance) && checkIsBetweenValidRange(winningDistance);
};

module.exports = { validateCarNames, validateWinningDistance };
