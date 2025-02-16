import positionToStr from "../util/positionToStr.js";
import OUTPUT from "../constant/output.js";

const OutputView = {
  printBeforeResult() {
    console.log(OUTPUT.BEFORE_RESULT);
  },
  printRoundResult(carList) {
    carList.forEach((car) => {
      console.log(`${car.getName()} : ${positionToStr(car.getPosition())}`);
    });
    console.log("");
  },
  printWinners(winners) {
    console.log(`${OUTPUT.WINNER}${winners.join(", ")}`);
  },
};

export default OutputView;
