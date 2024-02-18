const CONDITIONS = require('../constant/Conditions.js');
const getNumberToDistanceSymbol = require('../utils/getNumberToDistanceSymbol.js');
const { OUTPUT_MESSAGES } = require('../constant/messages.js');

const OutputView = {
  // 추후 수정
  printNewLine() {
    console.log();
  },

  printGameResultMessage() {
    console.log(OUTPUT_MESSAGES.result);
  },

  printCarInformation(carName, distance) {
    console.log(`${carName} : ${getNumberToDistanceSymbol(distance)}`);
  },

  printGameResult(gameResult) {
    gameResult.forEach(({ carName, distance }) => {
      this.printCarInformation(carName, distance);
    });

    this.printNewLine();
  },

  printWinners(winners) {
    console.log(OUTPUT_MESSAGES.winners + winners.join(CONDITIONS.delimiter + CONDITIONS.space));
  },

  print(message) {
    console.log(message);
  },
};

module.exports = OutputView;
