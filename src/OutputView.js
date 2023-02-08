const OutputView = {
  printRacingStart() {
    console.log("실행 결과");
  },

  numberToPath(number) {
    return "-".repeat(Number(number));
  },

  printOneTurnResult(playersResultOfOneTurn) {
    playersResultOfOneTurn.forEach((playerResult) =>
      console.log(`${playerResult.name} : ${this.numberToPath(playerResult.currentPosition)}`)
    );
  },
};

module.exports = OutputView;
