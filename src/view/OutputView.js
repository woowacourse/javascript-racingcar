const scoreConverter = require('../utils/scoreConverter');

const OutputView = {
  print(message) {
    console.log(message);
  },

  printRoundResult(roundResult) {
    const templates = roundResult.map(({ name, position }) => {
      const positionScore = scoreConverter(position);

      return `${name} : ${positionScore}`;
    });

    console.log(`${templates.join('\n')}\n`);
  },

  printFinalResult(winners) {
    const winnersName = winners.join(', ');

    console.log(`${winnersName}(이)가 최종 우승했습니다.`);
  },
};

module.exports = OutputView;
