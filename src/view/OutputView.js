import CONSTANT from "../CONSTANTS";
import Console from "../utils/Console";

class OutputView {
  static printResult(tryCount, result) {
    Console.print("");
    Console.print(CONSTANT.MESSAGE.resultOutput);

    Console.print(this.#getResultString(tryCount, result));
  }

  static printWinners(winners) {
    Console.print("");
    Console.print(
      `${CONSTANT.MESSAGE.winnerOutputHeader}${winners.join(
        CONSTANT.MESSAGE.winnerConnectionMark
      )}`
    );
  }

  static #getResultString(tryCount, result) {
    return new Array(tryCount)
      .fill(null)
      .map((_, nowTry) => this.#generateTryString(nowTry, result))
      .join(CONSTANT.MESSAGE.resultLineBreakMarkInRace);
  }

  static #generateTryString(nowTry, result) {
    return result
      .map(
        (carInfo) =>
          `${carInfo.getName()}${
            CONSTANT.MESSAGE.resultConnectionMark
          }${CONSTANT.MESSAGE.distanceMark.repeat(
            carInfo.getPositionWhen(nowTry)
          )}`
      )
      .join(CONSTANT.MESSAGE.resultLineBreakMarkInRound);
  }
}

export default OutputView;
