const Console = require('../utils/Console');
const { GAME_MESSAGE, GAME_STRING } = require('../constants');

class OutputView {
  static printGameStartMsg() {
    Console.print(GAME_MESSAGE.progressResult);
  }

  static printGameProgress(name, progress, isLast) {
    const result = `${name} : ${progress.join(GAME_STRING.progressJoin)}${
      isLast ? GAME_STRING.space : GAME_STRING.empty
    }`;
    Console.print(result);
  }

  static printGameWinner(names) {
    const winners = names.join(GAME_STRING.winnersJoin);
    Console.print(GAME_MESSAGE.getWinners(winners));
    Console.close();
  }
}

module.exports = OutputView;
