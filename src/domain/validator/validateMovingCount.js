const { ERROR_MESSAGE } = require('../../constants');
const { StringValidator } = require('../../utils/validator');

const isValidMovingCount = (movingCount) => {
  return movingCount >= 1;
};

const validateMovingCount = (movingCount) => {
  if (!StringValidator.isNumber(movingCount)) {
    throw new Error(ERROR_MESSAGE.INVALID_MOVING_COUNT);
  }
  if (!isValidMovingCount(Number(movingCount))) {
    throw new Error(ERROR_MESSAGE.INVALID_MOVING_COUNT);
  }
};

module.exports = validateMovingCount;
