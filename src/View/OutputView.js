const CONSTANTS = require('../Constant/Constants');
const RACE_MESSAGE = require('../Constant/RaceMessage');
const Console = require('../Utils/Console');
const DataParseUtils = require('../Utils/DataParseUtils');

const OutputView = {
  printResultMessage() {
    Console.print(RACE_MESSAGE.raceResult);
  },

  printRaceResult(result) {
    result.forEach((value, key) => {
      Console.print(
        `${key} ${CONSTANTS.colon} ${CONSTANTS.dash.repeat(value)}`,
      );
    });
    Console.print(CONSTANTS.empty);
  },

  printWinners(result) {
    const winners = DataParseUtils.parseWinner(result);
    Console.print(
      `${winners.join(CONSTANTS.delimiter)}${RACE_MESSAGE.winnerResult}`,
    );
  },
};

module.exports = OutputView;
