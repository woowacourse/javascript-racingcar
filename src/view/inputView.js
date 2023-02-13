const { INPUT_MESSAGE } = require('./utils/constants/message');
const inputValidator = require('./InputValidator');
const Console = require('./utils/Console');

class InputView {
  static async readCarNameList() {
    try {
      const input = await Console.question(INPUT_MESSAGE.carNames);
      const carNameList = this.#preprocessCarName(input);

      inputValidator.validateCarNameList(carNameList);
      return carNameList;
    } catch (err) {
      Console.print(err.message);
      return this.readCarNameList();
    }
  }

  static async readNumberOfTrials() {
    try {
      const input = await Console.question(INPUT_MESSAGE.numberOfTrials);
      const numberOfTrials = this.#preprocessNumberOfTrials(input);

      inputValidator.validateNumberOfTrials(numberOfTrials);
      return numberOfTrials;
    } catch (err) {
      Console.print(err.message);
      return this.readNumberOfTrials();
    }
  }

  static #preprocessCarName(input) {
    return input.split(',').map((carName) => carName.trim());
  }

  static #preprocessNumberOfTrials(input) {
    return Number(input);
  }
}

module.exports = InputView;
