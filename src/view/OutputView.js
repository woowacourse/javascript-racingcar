const Console = require("../lib/Console");

const OutputView = {
  printErrorMessage(error) {
    Console.print(error);
  },

  printProcessResult(carStatus, tryCount) {
    Console.print("\n실행 결과");
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

      Console.print(`${name} : ${"-".repeat(currentPosition)}`);
    });
  },

  printWinner(winner) {
    Console.print(`${winner.join(", ")}가 최종 우승했습니다.`);
  },
};

module.exports = OutputView;
