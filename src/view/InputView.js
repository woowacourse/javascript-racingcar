const readlineInterface = require("../util/readlineInterface");
const { CONDITION, MESSAGES } = require("../constant/Constant");

const InputView = {
  readCarNames(messages) {
    return new Promise((resolve, reject) => {
      readlineInterface.question(messages, (carNames) => {
        if (!CONDITION.carNames.test(carNames)) {
          reject(new Error(MESSAGES.carTextError));
        }

        const cars = carNames.split(",");
        resolve(cars);
      });
    });
  },

  readRepeatNumber(messages) {
    return new Promise((resolve, reject) => {
      readlineInterface.question(messages, (repeatNumber) => {
        if (!CONDITION.repeatNumber.test(repeatNumber)) {
          reject(new Error(MESSAGES.repeatRangeError));
        }

        readlineInterface.close();
        resolve(Number(repeatNumber));
      });
    });
  },
};

module.exports = InputView;
