const OutputView = {
  printMessage(message) {
    console.log(message);
  },

  printRaceResult(carNames, carDistances) {
    const raceResult = [];
    for (let i = 0; i < carNames.length; i += 1) {
      raceResult[i] = `${carNames[i]} : ${"-".repeat(carDistances[i])}\n`;
    }
    console.log(raceResult.join(''));
  },

  printWinners(winners) {
    console.log(`${winners}가 최종 우승했습니다.`);
  },
};

module.exports = OutputView;
