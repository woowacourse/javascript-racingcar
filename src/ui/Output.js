import { OUTPUT_MESSAGE } from "../Const.js";

class Output {
  printResult(moveResult, winnerList) {
    console.log(
      OUTPUT_MESSAGE.result +
        moveResult +
        `최종 우승자: ${winnerList.join(", ")}`
    );
  }

  printLine(message) {
    console.log(message);
  }
}

export default Output;
