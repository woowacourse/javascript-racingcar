const rl = require("../library/ReadLine");

const InputView = {
  readCarNames(messages) {
    return new Promise(function(resolve, reject) {
      rl.question(messages, (carNames) => {
        if (!/^([^,]{1,5},)*[^,]{1,5}$/.test(carNames)) reject(new Error());
        const cars = carNames.split(",");
        resolve(cars);
      });
    });
  },
  
  readRepeatNumber(messages) {
    return new Promise(function(resolve, reject) {
      rl.question(messages, (repeatNumber) => {
        if (!/^[1-9]\d*$/.test(repeatNumber)) reject(new Error());
        rl.close();
        resolve(repeatNumber);
      });
    });
  },
};

module.exports = InputView;
