const Console = require('../utils/Console');
const { QUERY } = require('../constants/messages');

const Inputs = {
  readCarName() {
    return Console.readline(QUERY.CAR_NAME);
  },

  readTryCount() {
    return Console.readline(QUERY.TRY_COUNT);
  },
};

module.exports = Inputs;
