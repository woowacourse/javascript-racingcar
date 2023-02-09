const { OUTPUT_MESSAGE } = require('../utils/constants');
const numberToDistanceString = require('../utils/numberToDistanceString');
const readLine = require('../utils/readLine');

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

  printWinner(names) {
    let printNames = names.join(', ');
    console.log(OUTPUT_MESSAGE.WINNERS(printNames));
  },

  closeConsole() {
    readLine.close();
  },
};

module.exports = OutputView;
