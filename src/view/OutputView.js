const Console = require("../util/Console");
const { MESSAGE, POSITION_UNIT, WINNER_DIVIDER } = require("../util/Constant");

const OutputView = {
  printErrorMessage(error) {
    Console.print(error);
  },

  printProcessResult(carStatus, tryCount) {
    Console.print(MESSAGE.output.processResultHeader);
    for (let sequence = 0; sequence < tryCount; sequence++) {
      this.printCarStatus(carStatus, sequence);
      Console.print("");
    }
  },

  printCarStatus(carStatus, sequence) {
    carStatus.forEach(({ name, position }) => {
      const currentPosition = position
        .slice(0, sequence + 1)
        .reduce((acc, cur) => acc + cur, 0);

      Console.print(`${name} : ${POSITION_UNIT.repeat(currentPosition)}`);
    });
  },

  printWinner(winner) {
    Console.print(`${winner.join(WINNER_DIVIDER)}가 최종 우승했습니다.`);
  },
};

module.exports = OutputView;
