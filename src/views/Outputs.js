const Console = require('../utils/Console');
const { getRacingSnapShot, getWinnersMessage } = require('../utils/output');

const Outputs = {
  printGameResultMessage() {
    Console.print('\n실행 결과');
  },

  printRacingSnapShot(cars) {
    cars.forEach(car => Console.print(getRacingSnapShot(car)));
    Console.print('\n');
  },

  printWinners(winners) {
    Console.print(getWinnersMessage(winners));
  },
};

module.exports = Outputs;
