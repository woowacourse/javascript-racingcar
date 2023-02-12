const { Messages } = require('../Config');

const OutputView = {
  printResult(gameStatus) {
    Object.entries(gameStatus).forEach(([carName, position]) => {
      console.log(`${carName} : ${new Array(position).fill(Messages.MOVING_TRACE).join('')}`);
    });
    console.log();
  },

  printResultMessage() {
    console.log(Messages.RESULT);
  },

  printWinners(winners) {
    console.log(`${winners.join(Messages.WINNER_SEPARATOR)}${Messages.PRINT_WINNER}`);
  },
};

module.exports = OutputView;
