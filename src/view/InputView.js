const rl = require("../library/ReadLine");
const ErrorHandler = require("../domain/ErrorHandler");

const InputView = {
  readCarNames(messages) {
    return new Promise(function (resolve, reject) {
      rl.question(messages, (carNames) => {
        if (!ErrorHandler.checkCarNames(carNames)) reject(new Error());
        resolve(carNames);
      });
    });
  },

  readRepeatNumber(messages) {
    return new Promise(function (resolve, reject) {
      rl.question(messages, (repeatNumber) => {
        if (!ErrorHandler.checkRepeatNumber(repeatNumber)) reject(new Error());
        rl.close();
        resolve(repeatNumber);
      });
    });
  },
};

module.exports = InputView;
