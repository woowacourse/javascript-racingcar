const { MESSAGE } = require("../utils/Constant");
const Console = require("../utils/Console");
const Validation = require("../utils/Validation");

const InputView = {
  async inputCarNames() {
    const names = await Console.readline(MESSAGE.INPUT_CARNAME);
    if (!Validation.carNameValidate(names)) {
      return this.inputCarNames();
    }

    return names.split(",");
  },

  async inputTryNumber() {
    const number = await Console.readline(MESSAGE.INPUT_TRYNUMBER);
    if (!Validation.tryNumberValidate(number)) {
      return this.inputTryNumber();
    }

    return number;
  },

  close() {
    Console.close();
  },
};

module.exports = InputView;
