const Console = require('../utils/Console');
const { GAME_MESSAGE, GAME_STRING } = require('../constants');

const outputView = {
  printGameStartMsg() {
    Console.print(GAME_MESSAGE.progressResult);
  },

  printGameProgress(name, progress, isLast) {
    const result = `${name} : ${progress.join(GAME_STRING.progressJoin)}${
      isLast ? GAME_STRING.space : GAME_STRING.empty
    }`;
    Console.print(result);
  },

  printGameWinner(names) {
    const winners = names.join(GAME_STRING.winnersJoin);
    Console.print(GAME_MESSAGE.getWinners(winners));
    Console.close();
  },
};

module.exports = outputView;
