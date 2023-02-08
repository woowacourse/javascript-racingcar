const rl = require("../library/ReadLine");

const InputView = {
  readCarNames(messages, callback) {
    rl.question(messages, callback);
  },

  readRepeatNumber(messages, callback) {
    rl.question(messages, callback);
  },
};

module.exports = InputView;
