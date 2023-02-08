const scoreConverter = require('../utils/scoreConverter');

const OutputView = {
  print(message) {
    console.log(message);
  },

  printRoundResult(name, position) {
    const positionScore = scoreConverter(position);

    console.log(`${name} : ${positionScore}`);
  },
};

module.exports = OutputView;
