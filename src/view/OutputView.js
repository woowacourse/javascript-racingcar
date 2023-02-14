const { Converter } = require('../utils');
const { RESULT_MESSAGE } = require('../constants/Constant');

const OutputView = {
  print(message) {
    console.log(message);
  },

  printFinalResult(finalResult) {
    const template = finalResult
      .map((eachRound) => {
        return eachRound.map(Converter.carRoundResult).join('\n');
      })
      .join('\n\n');

    console.log(template);
  },

  printWinners(winners) {
    const winnersName = Converter.arrayToString(winners, ', ');

    console.log(`${winnersName}${RESULT_MESSAGE.ending}`);
  },
};

module.exports = OutputView;
