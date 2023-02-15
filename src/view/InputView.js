const { READ_CAR_NAMES, READ_TRY_COUNT } = require('../constants/message');
const Console = require('../utils/Console');

const InputView = {
  async readCarNames() {
    const input = await Console.read(READ_CAR_NAMES);
    return input.split(',');
  },

  async readTryCount() {
    const input = await Console.read(READ_TRY_COUNT);
    return +input;
  },
};

module.exports = InputView;
