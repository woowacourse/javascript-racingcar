import { OUTPUT_MESSAGE } from "../constants/constants.js";

export default class OutputView {
  printProgressResult(carName, carPosition) {
    console.log(
      `${carName} : ${OUTPUT_MESSAGE.PROGRESS_SYMBOL.repeat(carPosition)}`,
    );
  }

  printWinner(winners) {
    console.log(
      `최종 우승자: ${winners.map((winner) => winner.name).join(", ")}`,
    );
  }
}
