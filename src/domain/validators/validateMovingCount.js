const { ERROR_MESSAGE } = require('../../constants');
const { NumberValidator } = require('../../utils/validator');

const validateMovingCount = (movingCount) => {
  if (!NumberValidator.isNaturalNumber(movingCount)) {
    throw new Error(ERROR_MESSAGE.INVALID_MOVING_COUNT);
  }
};

module.exports = validateMovingCount;
