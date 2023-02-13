const readlineInterface = require("../util/readlineInterface");
const validator = require("./validator");
const trimmer = require("./trimmer");
const { MESSAGES } = require("../constant/Constant");

const InputView = {
  readCarNames(messages) {
    return new Promise((resolve, reject) => {
      readlineInterface.question(messages, (carNames) => {
        if (validator.isCarNamesInvalid(carNames)) {
          reject(new Error(MESSAGES.carTextError));
        }

        const trimmedCars = trimmer.trimCarNames(carNames);
        resolve(trimmedCars);
      });
    });
  },

  readRepeatNumber(messages) {
    return new Promise((resolve, reject) => {
      readlineInterface.question(messages, (repeatNumber) => {
        if (validator.isRepeatNumberInvalid(repeatNumber)) {
          reject(new Error(MESSAGES.repeatRangeError));
        }

        const trimmedRepeatNumber = trimmer.trimRepeatNumber(repeatNumber);
        resolve(trimmedRepeatNumber);
      });
    });
  },

  close() {
    readlineInterface.close();
  },
};

module.exports = InputView;
