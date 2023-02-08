const Console = require('../utils/Console');
const { QUERY } = require('../constants/messages');

const Inputs = {
  readCarName() {
    return new Promise(resolve => {
      Console.readline(QUERY.CAR_NAME, carName => {
        resolve(carName);
      });
    });
  },

  readTryCount() {
    return new Promise(resolve => {
      Console.readline(QUERY.TRY_COUNT, tryCount => {
        resolve(tryCount);
      });
    });
  },
};

module.exports = Inputs;
