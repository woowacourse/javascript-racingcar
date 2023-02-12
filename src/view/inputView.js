const { INPUT_MESSAGE } = require("./constants/message");
const inputValidator = require("./InputValidator");
const Console = require("./utils/Console");



const InputView = {
  async readCarNameList() {
    try {
      const input = await Console.question(INPUT_MESSAGE.carNames);
      const carNameList = this.preprocessCarName(input);

      inputValidator.validateCarNameList(carNameList);
      return carNameList;
    } catch (err) {
      Console.print(err.message);
      return this.readCarNameList();
    }
  },

  preprocessCarName(input) {
    return input.split(',').map((carName) => carName.trim());
  },

}

InputView.test();

module.exports = InputView;
