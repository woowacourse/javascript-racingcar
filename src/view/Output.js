import positionToStr from "../util/positionToStr.js";

const OutputView = {
  printBeforeResult() {
    console.log("\n실행 결과");
  },
  printRoundResult(name, position) {
    console.log(`${name} : ${positionToStr(position)}`);
  },
};

export default OutputView;
