const rl = require("../library/ReadLine");
const ErrorHandler = require("../domain/ErrorHandler");
const MESSAGES = require("../constant/Constant");

const InputView = {
  readCarNames(messages) {
    return new Promise(function (resolve, reject) {
      rl.question(messages, (carNames) => {
        const cars = carNames.split(",");
        if (!ErrorHandler.checkCarNames(carNames)) reject(new Error(MESSAGES.carTextError));
        if (ErrorHandler.checkIsOneCar(cars)) reject(new Error(MESSAGES.oneCarError));
        if (ErrorHandler.checkIsSameCarName(cars)) reject(new Error(MESSAGES.sameCarNameError));
        resolve(cars);
      });
    });
  },

  readRepeatNumber(messages) {
    return new Promise(function (resolve, reject) {
      rl.question(messages, (repeatNumber) => {
        if (!ErrorHandler.checkRepeatNumber(repeatNumber)) reject(new Error(MESSAGES.repeatRangeError));
        rl.close();
        resolve(repeatNumber);
      });
    });
  },
};

module.exports = InputView;
