const Console = require("../utils/Console");

const OutputView = {
  printError(errorMessage) {
    Console.print(errorMessage);
  },

  drawProgress(carNames, currentRace) {
    const countOfTrial = currentRace[0];
    countOfTrial.map((_, trialIdx) => {
      carNames.map((carName, idx) => {
        Console.print(
          carName + " : " + currentRace[idx].slice(0, trialIdx + 1).join("")
        );
      });
      Console.print("");
    });
  },

  printResult(winners) {
    Console.print("실행 결과");
    Console.print(winners.join(",") + " 우승!");
    Console.close();
  },
};

module.exports = OutputView;
