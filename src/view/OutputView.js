const { StaticValue, RL, ConsoleMessage } = require('../constants/constants');

const OutputView = {
  printMoveDistance(name, distance) {
    console.log(
      ConsoleMessage.moveDistance(
        name,
        StaticValue.CAR_MOVEMENT_SYMBOL.repeat(distance),
      ),
    );
  },

  printEmptyLine() {
    console.log();
  },

  printWinner(winners) {
    console.log(ConsoleMessage.result(winners.join(', ')));
    RL.close();
  },
};

module.exports = OutputView;
