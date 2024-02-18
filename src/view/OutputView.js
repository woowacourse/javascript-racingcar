import CONSTANT from "../CONSTANTS";
import Console from "../utils/Console";

class OutputView {
  static printResult(raceManager) {
    Console.print("");
    Console.print(CONSTANT.MESSAGE.resultOutput);

    Console.print(raceManager.getResultString());
  }

  static printWinner(raceManager) {
    Console.print("");
    Console.print(raceManager.getWinnerString());
  }
}

export default OutputView;
