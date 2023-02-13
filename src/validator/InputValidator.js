const CAR_RULE = require('../constant/carRule');
const { ERROR_MESSAGE } = require('../constant/message');
const Validator = require('../util/Validator');

const InputValidator = {
  checkCarNames(carNames) {
    if (!Validator.isAllowedCharacter(carNames)) {
      throw new Error(ERROR_MESSAGE.NAME_CHARACTER);
    }
    if (Validator.hasDuplicatedElements(carNames.split(CAR_RULE.SEPARATOR))) {
      throw new Error(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
    }
  },

  checkMovingCount(movingCount) {
    if (!Validator.isNaturalNumber(movingCount)) {
      throw new Error(ERROR_MESSAGE.MOVING_COUNT);
    }
  },
};

module.exports = InputValidator;
