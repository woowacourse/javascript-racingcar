const Console = require('../utils/Console');
const { QUERY } = require('../constants/messages');

const Inputs = {
  async readCarName() {
    const names = await Console.readline(QUERY.CAR_NAME);

    return names.split(',');
  },

  async readTryCount() {
    return Number(await Console.readline(QUERY.TRY_COUNT));
  },
};

module.exports = Inputs;
