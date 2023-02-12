const RACE_MESSAGE = require('../Constant/RaceMessage');
const Console = require('../Utils/Console');

const OutputView = {
  printResultMessage() {
    Console.print(RACE_MESSAGE.raceResult);
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  printRaceResult(result) {
    result.forEach((value, key) => {
      Console.print(`${key} : ${'-'.repeat(value)}`);
    });
    Console.print('');
  },

  printWinners(winners) {
    Console.print(`${winners.join(', ')}${RACE_MESSAGE.winnerResult}`);
    Console.close();
  },
};

module.exports = OutputView;
