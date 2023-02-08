const Console = require("../hook/Console");

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
};

module.exports = OutputView;
