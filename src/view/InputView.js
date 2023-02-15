const Console = require('../utils/Console');
const { Messages, Settings } = require('../constants/Config');
const Validator = require('../Validator');

const InputView = {
  getCarNames(racingGame) {
    let input;
    Console.readLine(Messages.INPUT_CAR_NAMES, (answer) => {
      input = answer.split(Settings.SEPARATOR).map((carName) => carName.trim());
      if (Validator.isValidCarNames(input)) return InputView.getCarNames(racingGame);
      racingGame.setCarList(input);
      InputView.getAttempts(racingGame);
    });
  },

  getAttempts(racingGame) {
    let attempts;
    Console.readLine(Messages.INPUT_ATTEMPTS, (answer) => {
      attempts = answer.trim();
      if (Validator.isValidAttempts(attempts)) return InputView.getAttempts(racingGame);
      racingGame.setAttempts(attempts);
      racingGame.playGame();
      Console.close();
    });
  },
};

module.exports = InputView;
