import { numberMoveSuccess } from "./util/numberMoveSuccess.js";
class RaceWinner {
  #raceWinner = [];

  constructor(carsMoveInfoList) {
    const maxMove = this.#calculateMaxMove(carsMoveInfoList);
    this.#raceWinner = this.#calculateWinner(maxMove, carsMoveInfoList);
  }

  #calculateMaxMove(carsMoveInfoList) {
    const maxMove = Math.max(...this.#eachCarMoveSuccess(carsMoveInfoList));
    return maxMove;
  }

  #eachCarMoveSuccess(carsMoveInfoList) {
    return carsMoveInfoList.map((moveInfo) =>
      numberMoveSuccess(moveInfo.moveTrace)
    );
  }

  #calculateWinner(maxMove, carsMoveInfoList) {
    const result = carsMoveInfoList.filter(
      (moveInfo) => numberMoveSuccess(moveInfo.moveTrace) === maxMove
    );
    const winner = result.map((moveInfo) => moveInfo.carName);

    return winner;
  }

  getRaceWinner() {
    return this.#raceWinner;
  }
}

export default RaceWinner;
