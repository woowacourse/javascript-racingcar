const { NAME, TRY_COUNT } = require('../constants/values');
const {
  ALPHA_WITH_COMMA,
  ONLY_NUMBER,
} = require('../constants/regularExpression');
const Common = require('./Common');

const Inputs = {
  async readCarName(names, { onError: errorCallback }) {
    try {
      return this.checkCarName(names);
    } catch (error) {
      return await errorCallback({ onError: errorCallback });
    }
  },

  async readTryCount(count, { onError: errorCallback }) {
    try {
      Common.testRegExp(count, ONLY_NUMBER);
      Common.validateNumberRange(parseInt(count), TRY_COUNT.MIN, TRY_COUNT.MAX);

      return parseInt(count);
    } catch (error) {
      return await errorCallback({ onError: errorCallback });
    }
  },

  checkCarName(names) {
    const carNames = names.split(',');

    Common.testRegExp(names, ALPHA_WITH_COMMA);
    Common.isUnique(carNames);
    carNames.forEach((name) =>
      Common.validateStringSize(name, NAME.MIN, NAME.MAX)
    );

    return carNames;
  },
};

module.exports = Inputs;
