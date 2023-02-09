const { OUTPUT_MESSAGE, ERROR_MESSAGE } = require('../utils/constants');
const numberToDistanceString = require('../utils/numberToDistanceString');

const OutputView = {
  printError(message) {
    console.log(message);
  },

  printMoveResult(names, moveData) {
    for (let index = 0; index < names.length; index++) {
      console.log(
        OUTPUT_MESSAGE.MOVE_RESULT(
          names[index],
          numberToDistanceString(moveData[index])
        )
      );
    }
    console.log();
  },
};

module.exports = OutputView;
