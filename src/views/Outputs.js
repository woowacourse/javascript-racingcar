const Console = require('../utils/Console');
const { getRacingSnapShot, getWinnersMessage } = require('../utils/output');

const Outputs = {
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
