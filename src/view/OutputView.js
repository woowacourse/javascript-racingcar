const IO = require('../utils/IO.js');
const { MESSAGE, SYMBOL } = require('../data/constants.js');

const OutputView = {
  printMoveProcess(cars) {
    cars.forEach((car) => {
      const moveCount = car.getMoveCount();
      IO.print(
        `${car.getCarName()} ${SYMBOL.ASSIGNMENT} ${SYMBOL.MOVE_SYMBOL.repeat(
          moveCount
        )}`
      );
    });
    IO.print('');
  },

  printMoveResult() {
    IO.print(MESSAGE.RESULT_OUTPUT);
  },
};

module.exports = OutputView;
