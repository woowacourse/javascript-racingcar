import { OUTPUT_MESSAGE } from "../constants/message.js";

export default class OutputView {
  printExecutionResult(results) {
    console.log(OUTPUT_MESSAGE.RESULT);
    results.forEach((result) => {
      result.forEach((car) => {
        console.log(
          `${car.name} : ${OUTPUT_MESSAGE.PROGRESS_SYMBOL.repeat(car.position)}`
        );
      });
      console.log("");
    });
  }

  printWinners(winnerNames) {
    console.log(`최종 우승자: ${winnerNames.join(", ")}`);
  }
}
