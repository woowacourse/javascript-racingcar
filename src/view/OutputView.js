import { SYSTEM_MESSAGE } from "../constants/SystemMessage.js";

class OutputView {
  printResultHeader() {
    console.log(SYSTEM_MESSAGE.OUTPUT_RACE_HEADER);
  }

  printRaceResult(carList) {
    carList.forEach((car) => {
      console.log(
        `${car.getName()} : ${SYSTEM_MESSAGE.OUTPUT_CAR_MARK.repeat(car.getPosition())}`,
      );
    });
  }

  printWinners(winners) {
    console.log(
      `${SYSTEM_MESSAGE.OUTPUT_WINNER}${winners.join(SYSTEM_MESSAGE.OUTPUT_WINNER_SEPERATOR)}`,
    );
  }

  printNewLine() {
    console.log();
  }
}

export default OutputView;
