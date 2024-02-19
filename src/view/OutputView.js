const numberToDistanceSymbol = require('../utils/numberToDistanceSymbol.js');
const { OUTPUT_MESSAGES } = require('../constant/Messages.js');
const { SYMBOL } = require('../constant/Conditions.js');

const OutputView = {
  printNewLine() {
    console.log();
  },

  printGameResultMessage() {
    console.log(OUTPUT_MESSAGES.result);
  },

  printCarInformation(carName, distance) {
    console.log(`${carName} : ${numberToDistanceSymbol(distance)}`);
  },

  printGameResult(gameResult) {
    gameResult.forEach(({ carName, distance }) => {
      this.printCarInformation(carName, distance);
    });

    this.printNewLine();
  },

  printWinners(winners) {
    console.log(OUTPUT_MESSAGES.winners + winners.join(SYMBOL.delimiter + SYMBOL.space));
  },

  print(message) {
    console.log(message);
  },
};

module.exports = OutputView;
