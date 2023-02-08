const Console = require('../utils/Console');
const { getRacingSnapShot, getWinnersMessage } = require('../utils/output');

const Outputs = {
  printRacingSnapShot(cars) {
    cars.forEach(car => Console.print(getRacingSnapShot(car)));
  },

  printWinners(winners) {
    Console.print(getWinnersMessage(winners));
  },
};

module.exports = Outputs;
