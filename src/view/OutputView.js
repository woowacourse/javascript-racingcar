const OutputView = {
  printMessage(message) {
    console.log(message);
  },

  printRoundResult(carNames, carDistances) {
    let result = "";

    carNames.forEach((currentCarName, index) => {
      result += `${currentCarName} : ${"-".repeat(carDistances[index])}\n`;
    });
    result += "\n";

    console.log(result);
  },

  printWinners(winners) {
    console.log(`${winners.join(", ")}가 최종 우승했습니다.`);
  },
};

module.exports = OutputView;
