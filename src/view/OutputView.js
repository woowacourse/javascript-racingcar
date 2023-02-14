const IO = require('../utils/IO.js');
const { MESSAGE, SYMBOL } = require('../data/constants.js');

const OutputView = {
  printWhiteSpace() {
    IO.print('');
  },

  printMoveProcess(cars) {
    cars.forEach((car) => {
      const moveCount = car.moveCount;
      IO.print(`${car.carName} ${':'} ${SYMBOL.MOVE_SYMBOL.repeat(moveCount)}`);
    });
    IO.print('');
  },

  printMoveResult() {
    IO.print(MESSAGE.RESULT_OUTPUT);
  },

  printWinner(winners) {
    const winnersList = winners.join(', ');
    IO.print(`${winnersList}${MESSAGE.WINNER_OUTPUT}`);
  },
};

module.exports = OutputView;
