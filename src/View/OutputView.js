const CONSTANTS = require('../Constant/Constants');
const RACE_MESSAGE = require('../Constant/RaceMessage');
const Console = require('../Utils/Console');
const DataParseUtils = require('../Utils/DataParseUtils');

const OutputView = {
  printResultMessage() {
    Console.print(RACE_MESSAGE.RACE_RESULT);
  },

  printRaceResult(result) {
    result.forEach((value, key) => {
      Console.print(
        `${key} ${CONSTANTS.COLON} ${CONSTANTS.DASH.repeat(value)}`,
      );
    });
    Console.print(CONSTANTS.EMPTY);
  },

  printWinners(result) {
    const winners = DataParseUtils.parseWinner(result);
    Console.print(
      `${winners.join(CONSTANTS.DELIMITER)}${RACE_MESSAGE.WINNER_RESULT}`,
    );
  },
};

module.exports = OutputView;
