const rl = require("../library/ReadLine");

const InputView = {
  readCarNames(messages) {
    return new Promise(function (resolve, reject) {
      rl.question(messages, (carNames) => {
        resolve(carNames);
      });
    });
  },

  readRepeatNumber(messages) {
    return new Promise(function (resolve, reject) {
      rl.question(messages, (repeatNumber) => {
        rl.close();
        resolve(repeatNumber);
      });
    });
  },
};

module.exports = InputView;
