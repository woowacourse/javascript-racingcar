const Console = require('../Utils/Console');
const RACE_MESSAGE = require('../Constant/RaceMessage');

const InputView = {
  async readCarNames() {
    const input = await Console.readLine(RACE_MESSAGE.inputCarName);

    return input.split(',');
  },

  async readTryCount() {
    const tryCount = await Console.readLine(RACE_MESSAGE.inputTryCount);

    return +tryCount;
  },
};

module.exports = InputView;
