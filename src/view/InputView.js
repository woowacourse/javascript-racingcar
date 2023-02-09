const rl = require("../library/ReadLine");

const InputView = {
  readCarNames(messages) {
    return new Promise(function(resolve, reject) {
      rl.question(messages, (carNames) => {
        if (!/^([^,]{1,5},)*[^,]{1,5}$/.test(carNames)) reject(new Error());
        let cars = carNames.split(",");
        resolve(cars);
      });
    });
  },

  readRepeatNumber(messages) {
    return new Promise(function(resolve, reject) {
      rl.question(messages, (repeatNumber) => {
        if (!/^[1-9]\d*$/.test(repeatNumber)) reject(new Error());
        resolve(repeatNumber);
      });
    });
  },
};

module.exports = InputView;
