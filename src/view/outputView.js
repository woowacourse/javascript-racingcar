const Console = require('../utils/Console');
const { GAME_MESSAGE } = require('../constants');

class OutputView {
  static printGameStartMsg() {
    Console.print(GAME_MESSAGE.progressResult);
  }

  static printGameProgress(name, progress) {
    const result = `${name} : ${progress.join('')}`;
    Console.print(result);
  }

  static printGameResult(names) {
    const winners = names.join(', ');
    Console.print(GAME_MESSAGE.getWinners(winners));
    Console.close();
  }
}

module.exports = OutputView;
