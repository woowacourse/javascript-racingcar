const Console = require('./Console');
const { Messages, Settings } = require('../Config');
const Validator = require('../Validator');

const InputView = {
  async getCarNames() {
    const answer = await Console.readLine(Messages.INPUT_CAR_NAMES);
    const carNames = answer.split(Settings.SEPARATOR).map((carName) => carName.trim());
    Validator.validateCarNames(carNames);
    return carNames;
  },

  async getAttempts() {
    const answer = await Console.readLine(Messages.INPUT_ATTEMPTS);
    Validator.validateAttempts(answer);
    return Number(answer);
  },

  async repeatInput(inputFunction, recursionDepth = 0) {
    if (recursionDepth > Settings.WRONG_INPUT_PATIENCE) throw new Error(Messages.ERROR_TOO_MANY);
    try {
      const input = await inputFunction();
      return input;
    } catch (error) {
      Console.print(error.message);
      Console.print('');
      return this.repeatInput(inputFunction, recursionDepth + 1);
    }
  },
};

module.exports = InputView;
