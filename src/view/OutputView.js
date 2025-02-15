import { SYSTEM_MESSAGE } from "../constants/SystemMessage.js";

class OutputView {
  printResultHeader() {
    console.log(SYSTEM_MESSAGE.OUTPUT_RACE_HEADER);
  }

  printRaceResult(carList) {
    // UI를 위한 get은 허용한다.
    carList.forEach((car) => {
      console.log(
        `${car.name} : ${SYSTEM_MESSAGE.OUTPUT_CAR_MARK.repeat(car.position)}`,
      );
    });
  }

  printWinners(winners) {
    console.log(`${SYSTEM_MESSAGE.OUTPUT_WINNER}${winners.join(", ")}`);
  }

  printNewLine() {
    console.log();
  }
}

export default OutputView;
