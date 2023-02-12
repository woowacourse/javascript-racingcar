const { MESSAGE, GAME } = require('../utils/constants');

const OutputView = {
  print(text) {
    console.log(text);
  },

  printStartGame() {
    OutputView.print(MESSAGE.OUTPUT.startGame);
  },

  printResult(histories) {
    OutputView.print(MESSAGE.OUTPUT.notifyResult);
    let result = [];
    histories.forEach((history) => {
      result.push(
        history
          .map((car) => `${car.name} : ${GAME.progressMarker.repeat(car.distance)}\n`)
          .join(''),
      );
    });
    OutputView.print(result.join('\n'));
  },

  printWinners(winnerNames) {
    OutputView.print(`${winnerNames.join(GAME.nameDivider)} ${MESSAGE.OUTPUT.isWinner}`);
  },
};

module.exports = OutputView;
