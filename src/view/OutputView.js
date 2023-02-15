const { OUTPUT_MESSAGE } = require('../utils/constants');
const readLine = require('../utils/readLine');

const OutputView = {
  printError(message) {
    console.log(message);
  },

  printMoveResult(names, moveData) {
    let resultStr = '';

    for (let index = 0; index < names.length; index++) {
      resultStr += OUTPUT_MESSAGE.MOVE_RESULT(names[index], '-'.repeat(moveData[index]) + '\n');
    }

    console.log(resultStr);
  },

  printWinners(names) {
    console.log(OUTPUT_MESSAGE.WINNERS(names.join(', ')));
  },

  closeConsole() {
    readLine.close();
  },
};

module.exports = OutputView;
