const { CustomError, ERROR_CODE } = require('../utils/Errors');
const { ONLY_ALPHA } = require('../constants/regularExpression');

const Common = {
  isString(value) {
    if (typeof value !== 'string')
      throw new CustomError({ code: ERROR_CODE.NOT_STRING }, value);

    return true;
  },

  isNumber(value) {
    if (typeof value !== 'number')
      throw new CustomError({ code: ERROR_CODE.NOT_NUMBER }, value);

    return true;
  },

  isAlpha(value) {
    if (!ONLY_ALPHA.test(value))
      throw new CustomError({ code: ERROR_CODE.NOT_ALPHA }, value);

    return true;
  },

  isEveryAlpha(value) {
    return value.split(',').every(each => Common.isAlpha(each));
  },

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
