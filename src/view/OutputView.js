const scoreConverter = require('../utils/scoreConverter');

const OutputView = {
  print(message) {
    console.log(message);
  },

  printRoundResult(name, position) {
    const positionScore = scoreConverter(position);

    console.log(`${name} : ${positionScore}`);
  },

  printFinalResult(winners) {
    const winnersName = winners.join(', ');

    console.log(`${winnersName}가 최종 우승했습니다.`);
  },
};

module.exports = OutputView;
