const { RL, ConsoleMessage } = require("../constants/Constants");

const OutputView = {
  printMoveDistance(name, distance) {
    console.log(
      ConsoleMessage.moveDistance(
        name,
        ConsoleMessage.CAR_MOVE_LOG_LETTER.repeat(distance)
      )
    );
  },

  printEmptyLine() {
    console.log();
  },

  printWinner(winners) {
    console.log(ConsoleMessage.result(winners.join(", ")));
    RL.close();
  },
};

module.exports = OutputView;
