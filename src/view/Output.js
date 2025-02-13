import positionToStr from "../util/positionToStr.js";

const OutputView = {
  printBeforeResult() {
    console.log("\n실행 결과");
  },
  printRoundResult(name, position) {
    console.log(`${name} : ${positionToStr(position)}`);
  },

  printWinners(winners) {
    console.log(
      `최종 우승자: ${winners.map((winner) => winner.getName()).join(", ")}`
    );
  },
};

export default OutputView;
