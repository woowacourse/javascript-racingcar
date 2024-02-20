import Console from "../utils/Console";
import CONSTANT from "../constants";

const { MESSAGE } = CONSTANT;

class OutputView {
  static printResult(tryCount, cars) {
    Console.print("");
    Console.print(MESSAGE.resultOutput);
    Console.print(this.#convertResultToString(tryCount, cars));
  }

  static printWinners(winners) {
    const header = MESSAGE.winnerOutputHeader;
    const content = winners.join(MESSAGE.winnerConnectionMark);

    Console.print("");
    Console.print(`${header}${content}`);
  }

  static #convertResultToString(tryCount, cars) {
    return Array.from({ length: tryCount }, (_, i) => i)
      .map((currentRound) => this.#generateResultInRace(currentRound, cars))
      .join(MESSAGE.resultLineBreakMarkInRace);
  }

  static #generateResultInRace(currentRound, cars) {
    return cars
      .map((car) => this.#generateResultInRound(currentRound, car))
      .join(MESSAGE.resultLineBreakMarkInRound);
  }

  static #generateResultInRound(currentRound, car) {
    const header = car.getName();
    const connectionMark = MESSAGE.resultConnectionMark;
    const content = MESSAGE.distanceMark.repeat(
      car.getPositionWhen(currentRound)
    );

    return `${header}${connectionMark}${content}`;
  }
}

export default OutputView;
