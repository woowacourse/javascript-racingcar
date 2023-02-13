const Console = require('../utils/Console');
const { Messages } = require('../constants/Config');

const OutputView = {
  printResult(racingGame) {
    racingGame.carList.forEach((car) => {
      Console.print(
        `${car.name} : ${new Array(car.position).fill(Messages.MOVING_TRACE).join('')}`
      );
    });
    Console.print('');
  },

  printResultMessage() {
    Console.print(Messages.RESULT);
  },

  printWinners(winners) {
    Console.print(`${winners.join(Messages.WINNER_SEPARATOR)}${Messages.PRINT_WINNER}`);
  },
};

module.exports = OutputView;
