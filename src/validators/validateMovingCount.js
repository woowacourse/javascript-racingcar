const { ERROR_MESSAGE } = require('../constants/message');
const { NumberValidator } = require('../utils/Validator');

const validateMovingCount = (movingCount) => {
  if (!NumberValidator.isNaturalNumber(movingCount)) {
    throw new Error(ERROR_MESSAGE.INVALID_MOVING_COUNT);
  }
};

module.exports = validateMovingCount;
