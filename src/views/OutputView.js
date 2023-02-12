const { OUTPUT_MESSAGE } = require('../utils/constants');

const readLine = require('../utils/readLine');

const OutputView = {
  printError(message) {
    readLine.write(message + '\n');
  },

  printMoveResult(names, moveData) {
    let resultStr = '';
    for (let index = 0; index < names.length; index++) {
      resultStr += OUTPUT_MESSAGE.MOVE_RESULT(names[index], OUTPUT_MESSAGE.DISTANCE.repeat(moveData[index])) + '\n';
    }
    readLine.write(resultStr + '\n');
  },

  printWinner(names) {
    const printNames = names.join(', ');
    readLine.write(OUTPUT_MESSAGE.WINNERS(printNames) + '\n');
  },

  closeConsole() {
    readLine.close();
  },
};

module.exports = OutputView;
