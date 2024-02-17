import { numberMoveSuccess } from "./util/numberMoveSuccess.js";
class RaceWinner {
  #raceWinner = [];

  constructor(carsMoveInfoList) {
    console.log(carsMoveInfoList);
    const maxMove = this.#calculateMaxMove(carsMoveInfoList);
    this.#raceWinner = this.#calculateWinner(maxMove, carsMoveInfoList);
  }

  #calculateMaxMove(carsMoveInfoList) {
    const maxMove = Math.max(
      ...carsMoveInfoList.map((moveInfo) =>
        numberMoveSuccess(moveInfo.moveTrace)
      )
    );
    return maxMove;
  }

  #calculateWinner(maxMove, carsMoveInfoList) {
    const result = carsMoveInfoList
      .filter((moveInfo) => numberMoveSuccess(moveInfo.moveTrace) === maxMove)
      .map((moveInfo) => moveInfo.carName);
    return result;
  }

  getRaceWinner() {
    return this.#raceWinner;
  }
}

export default RaceWinner;
