const { RL } = require('../constants/constants');

const InputView = {
  readInput(message, callback) {
    RL.question(message, (input) => callback(input));
  },
};

module.exports = InputView;
