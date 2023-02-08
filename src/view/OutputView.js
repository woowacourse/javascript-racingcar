const { Readline } = require("../constants/Constants");

const OutputView = {
  printMoveDistance(name, distance) {
    console.log(name + " : " + "-".repeat(distance));
  },

  printEmptyLine() {
    console.log();
  },

  printWinner(winners) {
    console.log(`${winners.join(", ")}가 최종 우승했습니다.`);
    Readline.close();
  },
};

module.exports = OutputView;
