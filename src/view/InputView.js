const readline = require('readline');
const { Messages, Settings } = require('../Config');
const Validator = require('../util/Validator');

const makeNewReadlineInterface = () => readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLine = async (query) => {
  const newRl = makeNewReadlineInterface();

  const answer = await new Promise((resolve) => {
    newRl.question(query, resolve);
  });

  newRl.close();
  return answer;
};

const InputView = {
  async getCarNames() {
    const answer = await readLine(Messages.INPUT_CAR_NAMES);

    const carNames = answer.split(Settings.SEPARATOR).map((carName) => carName.trim());
    Validator.validateCarNames(carNames);

    return carNames;
  },

  async getAttempts() {
    const answer = await readLine(Messages.INPUT_ATTEMPTS);

    Validator.validateAttempts(answer);

    return Number(answer);
  },

  async repeatInput(inputFunction, recursionDepth = 0) {
    if (recursionDepth > Settings.WRONG_INPUT_PATIENCE) throw new Error(Messages.ERROR_TOO_MANY);

    try {
      return await inputFunction();
    } catch (error) {
      console.log(`${error.message}\n`);
      return this.repeatInput(inputFunction, recursionDepth + 1);
    }
  },
};

module.exports = InputView;
