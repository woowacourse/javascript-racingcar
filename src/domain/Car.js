import getRandomNumberInRange from "../utils/getRandomNumberInRange";
import CONSTANT from "../constants/index";

class Car {
  #name;
  #positions;

  constructor(name, tryCount) {
    this.#name = name;
    this.#positions = new Array(tryCount).fill(0);
  }

  getName() {
    return this.#name;
  }

  getPositionWhen(round) {
    return this.#positions[round];
  }

  getFinalPosition() {
    return this.getPositionWhen(this.#positions.length - 1);
  }

  tryMove(currentRound) {
    if (this.#shouldGo()) {
      this.#move(currentRound);
    } else {
      this.#stop(currentRound);
    }
  }

  #move(currentRound) {
    if (currentRound === 0) {
      this.#positions[currentRound] = CONSTANT.NUMERIC.moveDistance;
      return;
    }

    this.#positions[currentRound] =
      this.#positions[currentRound - 1] + CONSTANT.NUMERIC.moveDistance;
  }

  #stop(currentRound) {
    if (currentRound === 0) {
      return;
    }

    this.#positions[currentRound] = this.#positions[currentRound - 1];
  }

  #shouldGo() {
    const randomNumber = getRandomNumberInRange(
      CONSTANT.NUMERIC.randomNumberLower,
      CONSTANT.NUMERIC.randomNumberUpper
    );

    return randomNumber >= CONSTANT.NUMERIC.moveStandard;
  }
}

export default Car;
