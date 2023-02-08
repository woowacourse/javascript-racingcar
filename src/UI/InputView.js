const Console = require('./Console');
const { Messages, Settings } = require('../Config');
const Validator = require('../Validator');

const InputView = {
  getCarNames(racingGame) {
    let input;
    Console.readLine(Messages.INPUT_CAR_NAMES, (answer) => {
      input = answer.split(Settings.SEPARATOR).map((carName) => carName.trim());
      if (Validator.invalidCarNames(input)) InputView.getCarNames();
      InputView.getAttempts();
    });
  },

  getAttempts(racingGame) {
    let attempts;
    Console.readLine(Messages.INPUT_ATTEMPTS, (answer) => {
      attempts = parseInt(answer, 10);
      if (Validator.invalidAttempts(attempts)) InputView.getAttempts();
    });
  },
};

module.exports = InputView;
