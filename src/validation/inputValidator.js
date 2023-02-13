const OutputView = require('../view/OutputView');
const { GAME, ERROR } = require('../constant/constants');

const printErrorMessage = (errorMessage) => {
  OutputView.print(new Error(errorMessage).message);
};

const isCheckCarNamesLength = (carNames) => {
  if (
    !carNames.every(
      (carName) => carName.length >= GAME.CAR_NAME.min && carName.length <= GAME.CAR_NAME.max,
    )
  ) {
    printErrorMessage(ERROR.carNamesLength);
    return false;
  }
  return true;
};

const isCheckDuplicatedCarName = (carNames) => {
  if (carNames.length !== new Set(carNames).size) {
    printErrorMessage(ERROR.duplicatedCarName);
    return false;
  }
  return true;
};

const isCheckBlankInCarName = (carNames) => {
  if (carNames.some((carName) => carName.includes(GAME.blank))) {
    printErrorMessage(ERROR.blankInCarName);
    return false;
  }
  return true;
};

const validateCarNames = (carNames) => {
  return (
    isCheckCarNamesLength(carNames) &&
    isCheckDuplicatedCarName(carNames) &&
    isCheckBlankInCarName(carNames)
  );
};

const isCheckIsBetweenValidRange = (winningDistance) => {
  if (!(GAME.DISTANCE.min <= winningDistance && winningDistance < GAME.DISTANCE.max)) {
    printErrorMessage(ERROR.invalidWinningDistanceRange);
    return false;
  }
  return true;
};

const isCheckIsInt = (winningDistance) => {
  if (Number.isNaN(winningDistance)) {
    printErrorMessage(ERROR.invalidWinningDistanceType);
    return false;
  }
  return true;
};

const validateWinningDistance = (winningDistance) => {
  return isCheckIsInt(winningDistance) && isCheckIsBetweenValidRange(winningDistance);
};

module.exports = { validateCarNames, validateWinningDistance };
