const OutputView = {
  printRacingStart() {
    console.log("\n실행 결과");
  },

  numberToPath(number) {
    return "-".repeat(Number(number));
  },

  printOneTurnResult(carsResultOfOneTurn) {
    carsResultOfOneTurn.forEach((carResult) =>
      console.log(`${carResult.name} : ${this.numberToPath(carResult.currentPosition)}`)
    );
    console.log();
  },

  printWinner(winners) {
    console.log(`${winners.join(", ")}가 최종 우승했습니다.`);
  },
};

module.exports = OutputView;
