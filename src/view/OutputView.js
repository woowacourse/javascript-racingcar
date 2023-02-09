const Console = require('../utils/Console');

const OutputView = {
  printTrace(raceInstance, i) {
    raceInstance.getCars().forEach((carInstance) => {
      const trace = new Array(carInstance.getPosition()[i]).fill('-').join('');
      Console.print(`${carInstance.getName()}: ${trace}`);
    });
  },

  printRaceResult(raceInstance) {
    Console.print('\n실행 결과');
    for (let i = 0; i <= raceInstance.getTrial(); i += 1) {
      this.printTrace(raceInstance, i);
      Console.print('');
    }
  },

  printWinners(winners) {
    Console.print(`${winners.join(', ')}가 최종 우승했습니다.`);
    Console.quit();
  },
};

module.exports = OutputView;
