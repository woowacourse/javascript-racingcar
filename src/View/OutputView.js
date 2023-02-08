const Console = require('../Utils/Console');
const DataParseUtils = require('../Utils/DataParseUtils');

const OutputView = {
  printResultMessage() {
    Console.print('\n실행 결과');
  },
  
  printRaceResult(result) {
    result.forEach((value, key) => {
      Console.print(`${key} : ${'-'.repeat(value)}`);
    });
    Console.print('');
  },

  printWinners(result) {
    const winners = DataParseUtils.parseWinner(result);
    Console.print(`${winners.join(', ')}가 최종 우승했습니다.`);
    Console.close();
  }
};

module.exports = OutputView;
