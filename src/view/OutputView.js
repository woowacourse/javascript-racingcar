const Console = require('../utils/Console');

const OutputView = {
  printTrace(raceInstance, i) {
    raceInstance.getCars().forEach((carInstance) => {
      const trace = new Array(carInstance.getPosition()[i]).fill('-').join('');
      Console.print(`${carInstance.getName()}: ${trace}`);
    });
  },

  printRaceResult(raceInstance) {
    Console.print('\n실행결과');
    for (let i = 0; i <= raceInstance.getTrial(); i += 1) {
      this.printTrace(raceInstance, i);
      Console.print('');
    }
  },
};

module.exports = OutputView;
