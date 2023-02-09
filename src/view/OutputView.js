const Console = require('../utils/Console');

const OutputView = {
  printTrace(raceInstance, i) {
    raceInstance.getCars().forEach((carInstance) => {
      const trace = new Array(carInstance.getPosition()[i]).fill('-').join('');
      Console.print(`${carInstance.getName()}: ${trace}`);
    });
  },
};

module.exports = OutputView;
