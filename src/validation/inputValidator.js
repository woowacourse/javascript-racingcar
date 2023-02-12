const OutputView = require('../view/OutputView');
const { GAME, ERROR } = require('../constant/constants');

const checkCarNamesLength = (carNames) => {
  if (
    !carNames.every(
      (carName) => carName.length >= GAME.CAR_NAME.min && carName.length <= GAME.CAR_NAME.max,
    )
  ) {
    OutputView.print(new Error(ERROR.carNamesLength).message);
    return false;
  }
  return true;
};

const checkDuplicatedCarName = (carNames) => {
  if (carNames.length !== new Set(carNames).size) {
    OutputView.print(new Error(ERROR.duplicatedCarName).message);
    return false;
  }
  return true;
};

const checkBlankInCarName = (carNames) => {
  if (carNames.some((carName) => carName.includes(GAME.blank))) {
    OutputView.print(new Error(ERROR.blankInCarName).message);
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
    OutputView.print(new Error(ERROR.invalidWinningDistanceRange).message);
    return false;
  }
  return true;
};

const checkIsInt = (winningDistance) => {
  if (Number.isNaN(winningDistance)) {
    OutputView.print(Error(ERROR.invalidWinningDistanceType).message);
    return false;
  }
  return true;
};

const validateWinningDistance = (winningDistance) => {
  return checkIsInt(winningDistance) && checkIsBetweenValidRange(winningDistance);
};

module.exports = { validateCarNames, validateWinningDistance };
