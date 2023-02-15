const Console = require('../utils/Console');
const { GAME_MESSAGE, GAME_STRING } = require('../constants');

const outputView = {
  printGameStartMsg() {
    Console.print(GAME_MESSAGE.progressResult);
  },
  
  printGameProgress(name, progress) {
    const result = `${name} : ${progress.join(GAME_STRING.progressJoin)}`;
    Console.print(result);
  },

  printGameWinner(names) {
    const winners = names.join(GAME_STRING.winnersJoin);
    Console.print(GAME_MESSAGE.getWinners(winners));
    Console.close();
  },
  
  printEmptyLine() {
    Console.print(GAME_STRING.emptyLine);
  },
};

module.exports = outputView;
