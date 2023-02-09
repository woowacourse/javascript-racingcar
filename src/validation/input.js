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
};

const checkDuplicatedCarName = (carNames) => {
  if (carNames.length !== new Set(carNames).size) {
    return handleError('자동차 이름은 중복될 수 없습니다.');
  }
};

const checkBlankInCarName = (carNames) => {
  if (carNames.some((carName) => carName.includes(' '))) {
    return handleError('자동차 이름은 공백이 포함될 수 없습니다.');
  }
};

const validateCarNames = (carNames) => {
  checkCarNameLength(carNames);
  checkDuplicatedCarName(carNames);
  checkBlankInCarName(carNames);
  return true;
};

const checkIsBetweenValidRange = (winningDistance) => {
  if (!(GAME.DISTANCE.min <= winningDistance && winningDistance < GAME.DISTANCE.max)) {
    return handleError('시도 횟수는 3 이상 10 미만이여야 합니다.');
  }
};

const checkIsInt = (winningDistance) => {
  if (Number.isNaN(winningDistance)) {
    return handleError('시도 횟수는 숫자로 입력해야 합니다.');
  }
};

const validateWinningDistance = (winningDistance) => {
  checkIsInt(winningDistance);
  checkIsBetweenValidRange(winningDistance);
  return true;
};

module.exports = { validateCarNames, validateWinningDistance };
