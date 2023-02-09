const OutputView = require('../view/OutputView');
const { GAME } = require('../utils/constants');

const handleError = (errorMessage) => {
  try {
    throw new Error(errorMessage);
  } catch (error) {
    OutputView.print(error.message);
  }
  return false;
};

const checkCarNameLength = (carNames) => {
  if (!carNames.every((carName) => carName.length >= 1 && carName.length <= 5)) {
    return handleError('자동차 이름은 1~5글자 사이여야 합니다.');
  }
  return true;
};

const checkDuplicatedCarName = (carNames) => {
  if (carNames.length !== new Set(carNames).size) {
    return handleError('자동차 이름은 중복될 수 없습니다.');
  }
  return true;
};

const checkBlankInCarName = (carNames) => {
  if (carNames.some((carName) => carName.includes(' '))) {
    return handleError('자동차 이름은 공백이 포함될 수 없습니다.');
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
    return handleError('시도 횟수는 3 이상 10 미만이여야 합니다.');
  }
  return true;
};

const checkIsInt = (winningDistance) => {
  if (Number.isNaN(winningDistance)) {
    return handleError('시도 횟수는 숫자로 입력해야 합니다.');
  }
  return true;
};

const validateWinningDistance = (winningDistance) => {
  return checkIsInt(winningDistance) && checkIsBetweenValidRange(winningDistance);
};

module.exports = { validateCarNames, validateWinningDistance };
