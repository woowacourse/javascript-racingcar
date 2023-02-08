const { NAME } = require('../constants/values');
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

  checkNumber(number) {
    Common.isNumber(number);
  },
};

module.exports = Car;
