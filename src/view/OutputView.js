import Console from "../utils/Console";
import CONSTANT from "../constants";

class OutputView {
  static printResult(tryCount, cars) {
    Console.print("");
    Console.print(CONSTANT.MESSAGE.resultOutput);
    Console.print(this.#convertResultToString(tryCount, cars));
  }

  static printWinners(winners) {
    Console.print("");
    Console.print(
      `${CONSTANT.MESSAGE.winnerOutputHeader}${winners.join(
        CONSTANT.MESSAGE.winnerConnectionMark
      )}`
    );
  }

  static #convertResultToString(tryCount, cars) {
    return Array.from({ length: tryCount }, (_, i) => i)
      .map((currentRound) => this.#generateResultInRace(currentRound, cars))
      .join(CONSTANT.MESSAGE.resultLineBreakMarkInRace);
  }

  static #generateResultInRace(currentRound, cars) {
    return cars
      .map((car) => this.#generateResultInRound(currentRound, car))
      .join(CONSTANT.MESSAGE.resultLineBreakMarkInRound);
  }

  static #generateResultInRound(currentRound, car) {
    return `${car.getName()}${
      CONSTANT.MESSAGE.resultConnectionMark
    }${CONSTANT.MESSAGE.distanceMark.repeat(
      car.getPositionWhen(currentRound)
    )}`;
  }
}

export default OutputView;
