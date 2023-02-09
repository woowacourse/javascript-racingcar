const { MESSAGE } = require("../utils/Constant");
const Validation = require("../utils/Validation");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const InputView = {
  inputCarName(carsName) {
    rl.question(MESSAGE.INPUT_CARNAME, (answer) => {
      if (!Validation.carNameValidate(answer))
        return this.inputCarName(carsName);

      carsName(answer);
    });
  },

  inputNumber(tryNumber) {
    rl.question(MESSAGE.INPUT_TRYNUMBER, (answer) => {
      if (!Validation.tryNumberValidate(answer))
        return this.inputNumber(tryNumber);

      tryNumber(answer);
      rl.close();
    });
  },
};

module.exports = InputView;
