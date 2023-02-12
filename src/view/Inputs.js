const Validator = require('../validator');
const Console = require('../utils/Console');
const { QUERY } = require('../constants/messages');

const Inputs = {
  async readCarName({ onError } = { onError: null }) {
    const names = await Console.readline(QUERY.CAR_NAME);

    return await Validator.Inputs.readCarName(names, {
      onError: onError ?? this.readCarName,
    });
  },

  async readTryCount({ onError } = { onError: null }) {
    const count = await Console.readline(QUERY.TRY_COUNT);

    return await Validator.Inputs.readTryCount(count, {
      onError: onError ?? this.readTryCount,
    });
  },
};

module.exports = Inputs;
