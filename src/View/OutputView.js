const Console = require("../utils/Console");

const OutputView = {
  drawProgress(carNames, currentRace) {
    for (const numberOfTrial in currentRace) {
      carNames.map((val, idx) =>
        Console.print(
          val + " : " + currentRace[idx].slice(0, numberOfTrial + 1).join("")
        )
      );
      Console.print("");
    }
  },

  printResult(winner) {
    Console.print("실행 결과");
    Console.print(winner.join(",") + " 우승!");
  },
};

module.exports = OutputView;
