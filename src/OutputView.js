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
};

module.exports = OutputView;
