const Console = require('../utils/Console');

const OutputView = {
  printTrace(raceInstance, index) {
    raceInstance.getCars().forEach((carInstance) => {
      const trace = new Array(carInstance.getTrace()[index]).fill('-').join('');
      Console.print(`${carInstance.getName()}: ${trace}`);
    });
  },

  printRaceResult(raceInstance) {
    Console.print('\n실행 결과');
    for (let index = 0; index <= raceInstance.getTrial(); index += 1) {
      this.printTrace(raceInstance, index);
      Console.print('');
    }
  },

  printWinners(winners) {
    Console.print(`${winners.join(', ')}가 최종 우승했습니다.`);
    Console.quit();
  },
};

module.exports = OutputView;
