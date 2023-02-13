const { CONDITION } = require("../constant/Constant");

const validator = {
  isCarNamesInvalid(carNames) {
    if (CONDITION.carNames.test(carNames)) {
      return false;
    }

    return true;
  },

  isRepeatNumberInvalid(repeatNumber) {
    if (CONDITION.repeatNumber.test(repeatNumber)) {
      return false;
    }

    return true;
  },
};

module.exports = validator;
