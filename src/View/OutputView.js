const Console = require('../utils/Console');

const OutputView = {
  drawProgress(carNames, currentRace) {
    const tryCount = currentRace[0];
    for (const count in tryCount) {
      carNames.map((val, idx) =>
        Console.print(
          val + ' : ' + currentRace[idx].slice(0, count + 1).join('')
        )
      );
      Console.print('');
    }
  },

  printResult(winner) {
    Console.print('실행 결과');
    Console.print(winner.join(',') + ' 우승!');
    Console.close();
  },
};

module.exports = OutputView;
