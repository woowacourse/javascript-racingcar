const OutputView = require('../view/OutputView');
const { GAME, ERROR } = require('../constant/constants');

const printErrorMessage = (errorMessage) => {OutputView.print(new Error(errorMessage).message)} 

const checkCarNamesLength = (carNames) => {
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

const checkDuplicatedCarName = (carNames) => {
  if (carNames.length !== new Set(carNames).size) {
    printErrorMessage(ERROR.duplicatedCarName);
    return false;
  }
  return true;
};

const checkBlankInCarName = (carNames) => {
  if (carNames.some((carName) => carName.includes(GAME.blank))) {
    printErrorMessage(ERROR.blankInCarName);
    return false;
  }
  return true;
};

const validateCarNames = (carNames) => {
  return (
    checkCarNamesLength(carNames) &&
    checkDuplicatedCarName(carNames) &&
    checkBlankInCarName(carNames)
  );
};

const checkIsBetweenValidRange = (winningDistance) => {
  if (!(GAME.DISTANCE.min <= winningDistance && winningDistance < GAME.DISTANCE.max)) {
    printErrorMessage(ERROR.invalidWinningDistanceRange);
    return false;
  }
  return true;
};

const checkIsInt = (winningDistance) => {
  if (Number.isNaN(winningDistance)) {
    printErrorMessage(ERROR.invalidWinningDistanceType);
    return false;
  }
  return true;
};

const validateWinningDistance = (winningDistance) => {
  return checkIsInt(winningDistance) && checkIsBetweenValidRange(winningDistance);
};

module.exports = { validateCarNames, validateWinningDistance };
