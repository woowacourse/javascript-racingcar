import { numberMoveSuccess } from "../util/numberMoveSuccess.js";
class RaceWinner {
  #raceWinner = [];

  constructor(carsMoveInfoList) {
    const maxMove = this.#calculateMaxMove(carsMoveInfoList);
    this.#raceWinner = this.#calculateWinner(maxMove, carsMoveInfoList);
  }

  #calculateMaxMove(carsMoveInfoList) {
    const maxMove = Math.max(...this.#eachCarMove(carsMoveInfoList));
    return maxMove;
  }

  #eachCarMove(carsMoveInfoList) {
    return carsMoveInfoList.map((moveInfo) =>
      numberMoveSuccess(moveInfo.moveTrace)
    );
  }

  #calculateWinner(maxMove, carsMoveInfoList) {
    const result = carsMoveInfoList.filter(
      (moveInfo) => numberMoveSuccess(moveInfo.moveTrace) === maxMove
    );
    const winnerName = result.map((moveInfo) => moveInfo.carName);

    return winnerName;
  }

  getRaceWinner() {
    return this.#raceWinner;
  }
}

export default RaceWinner;
