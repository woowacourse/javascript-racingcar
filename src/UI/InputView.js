const Console = require('./Console');
const { Messages, Settings } = require('../Config');
const Validator = require('../Validator');

const InputView = {
  getCarNames() {
    let input;
    Console.readLine(Messages.INPUT_CAR_NAMES, (answer) => {
      input = answer.split(Settings.SEPARATOR).map((carName) => carName.trim());
    });
  },
};

module.exports = InputView;
