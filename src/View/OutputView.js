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
        `${key} : ${'-'.repeat(value)}`,
      );
    });
    Console.print('');
  },

  printWinners(result) {
    const winners = DataParseUtils.parseWinner(result);
    Console.print(
      `${winners.join(', ')}${RACE_MESSAGE.winnerResult}`,
    );
    Console.close();
  },
};

module.exports = OutputView;
