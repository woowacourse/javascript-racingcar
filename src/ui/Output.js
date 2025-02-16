import { OUTPUT_MESSAGE } from "../Const.js";

class Output {
  static printNewLine = () => {
    return "\n";
  };

  static printLine(message) {
    console.log(message);
  }

  printResult(moveResult, winnerList) {
    console.log(
      Output.printNewLine() +
        OUTPUT_MESSAGE.result +
        Output.printNewLine() +
        moveResult +
        `최종 우승자: ${winnerList.join(", ")}`
    );
  }
}

export default Output;
