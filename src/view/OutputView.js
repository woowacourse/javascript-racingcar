const { Converter } = require('../utils');

const OutputView = {
  print(message) {
    console.log(message);
  },

  printRoundResult(roundResult) {
    const templates = roundResult.map(({ name, position }) => {
      const positionScore = Converter.numberToDash(position);

      return `${name} : ${positionScore}`;
    });

    const result = Converter.arrayToString(templates, '\n');

    console.log(`${result}\n`);
  },

  printFinalResult(winners) {
    const winnersName = Converter.arrayToString(winners, ', ');

    console.log(`${winnersName}(이)가 최종 우승했습니다.`);
  },
};

module.exports = OutputView;
