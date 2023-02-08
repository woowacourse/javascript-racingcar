const Console = require('./Console');
const { Messages } = require('../Config');

const OutputView = {
  printResult(racingGame) {
    racingGame.carList.forEach((car) => {
      Console.print(
        `${car.name} : ${new Array(car.position).fill('-').join('')}`
      );
    });
    Console.print('');
  },

  printResultMessage() {
    Console.print(Messages.RESULT);
  },

  printWinners(winners) {
    Console.print(`${winners.join(', ')}가 최종 우승했습니다.`);
  },
};

module.exports = OutputView;
