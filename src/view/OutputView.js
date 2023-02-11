const OutputView = {
  printMessage(message) {
    console.log(message);
  },

  printRaceResult(carNames, carDistances) {
    for (let i = 0; i < carNames.length; i += 1) {
      console.log(`${carNames[i]} : ${"-".repeat(carDistances[i])}`);
    }
    console.log();
  },

  printWinners(winners) {
    console.log(`${winners}가 최종 우승했습니다.`);
  },
};

module.exports = OutputView;
