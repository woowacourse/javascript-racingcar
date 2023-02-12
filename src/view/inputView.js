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

  async readNumberOfTrials () {
    try {
      const input = await Console.question(INPUT_MESSAGE.numberOfTrials);
      const numberOfTrials = this.preprocessNumberOfTrials(input);

      inputValidator.validateNumberOfTrials(numberOfTrials);
      return numberOfTrials;
    } catch (err) {
      Console.print(err.message);
      return this.readNumberOfTrials();
    } 
  },

  preprocessCarName(input) {
    return input.split(',').map((carName) => carName.trim());
  },

  preprocessNumberOfTrials(input) {
    return Number(input);
  },
  
}

module.exports = InputView;
