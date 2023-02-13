const Console = require('../utils/Console');
const { getWinnersMessage } = require('../utils/outputGenerator');

const Outputs = {
  printError(error) {
    Console.print(error);
  },

  printGameResultMessage() {
    Console.print('\n실행 결과');
  },

  printRacingSnapShot(snapShots) {
    snapShots.forEach(snapShot => Console.print(`${snapShot}\n`));
  },

  printWinners(winners) {
    Console.print(getWinnersMessage(winners));
  },
};

module.exports = Outputs;
