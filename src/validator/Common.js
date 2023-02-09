const { CustomError, ERROR_CODE } = require('../utils/Errors');

const Common = {
  isUnique(values) {
    const set = new Set(values);

    if (values.length !== set.size) {
      throw new CustomError({ code: ERROR_CODE.NOT_UNIQUE }, values);
    }

    return true;
  },

  validateStringSize(value, min, max) {
    if (value.length < min || value.length > max)
      throw new CustomError(
        { code: ERROR_CODE.INVALID_STRING_SIZE, payload: { min, max } },
        value
      );

    return true;
  },

  validateNumberRange(value, min, max) {
    if (value < min || value > max) {
      throw new CustomError(
        { code: ERROR_CODE.INVALID_STRING_SIZE, payload: { min, max } },
        value
      );
    }

    return true;
  },

  testRegExp(value, regExp) {
    if (!(regExp instanceof RegExp)) {
      throw new CustomError({ code: ERROR_CODE.WRONG_FORMAT }, value);
    }
    if (!regExp.test(value)) {
      throw new CustomError({ code: ERROR_CODE.WRONG_FORMAT }, value);
    }

    return true;
  },
};

module.exports = Common;
