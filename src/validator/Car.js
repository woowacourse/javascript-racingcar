const { NAME, TRY_COUNT } = require('../constants/values');
const Common = require('./Common');

const Car = {
  checkNames(names) {
    Common.isString(names);
  },

  checkName(name) {
    Common.isString(name);
    Common.isEveryAlpha(name);
    Common.validateStringSize(name, NAME.MIN, NAME.MAX);
  },

  checkTryCount(number) {
    Common.isNumber(number);
    Common.validateNumberRange(number, TRY_COUNT.MIN, TRY_COUNT.MAX);
  },
};

module.exports = Car;
