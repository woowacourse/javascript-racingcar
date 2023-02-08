const { Readline, ConsoleMessage } = require("../constants/Constants");

const OutputView = {
  printMoveDistance(name, distance) {
    console.log(ConsoleMessage.moveDistance(name, "-".repeat(distance)));
  },

  printEmptyLine() {
    console.log();
  },

  printWinner(winners) {
    console.log(ConsoleMessage.result(winners.join(", ")));
    Readline.close();
  },
};

module.exports = OutputView;
