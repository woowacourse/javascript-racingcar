const InputsValidator = require('../validator/InputsValidator');
const Console = require('../utils/Console');
const { QUERY } = require('../constants/messages');

const Inputs = {
  async readCarName({ onError } = { onError: null }) {
    const names = await Console.readline(QUERY.CAR_NAME);

    return await InputsValidator.readCarName(names, {
      onError: onError ?? this.readCarName,
    });
  },

  async readTryCount({ onError } = { onError: null }) {
    const count = await Console.readline(QUERY.TRY_COUNT);

    return await InputsValidator.readTryCount(count, {
      onError: onError ?? this.readTryCount,
    });
  },
};

module.exports = Inputs;
