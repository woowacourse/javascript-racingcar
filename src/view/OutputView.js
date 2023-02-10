const { Converter } = require('../utils');
const { RESULT_MESSAGE } = require('../constants/Constant');

const OutputView = {
  printResultMessage() {
    console.log(RESULT_MESSAGE.opening);
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

    console.log(`${winnersName}${RESULT_MESSAGE.ending}`);
  },
};

module.exports = OutputView;
