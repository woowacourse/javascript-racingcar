import getRandomNumberInRange from "../utils/getRandomNumberInRange";
import CONSTANT from "../constants/index";

const { NUMERIC } = CONSTANT;

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
      this.#positions[currentRound] = NUMERIC.moveDistance;
      return;
    }

    this.#positions[currentRound] =
      this.#positions[currentRound - 1] + NUMERIC.moveDistance;
  }

  #stop(currentRound) {
    if (currentRound === 0) {
      return;
    }

    this.#positions[currentRound] = this.#positions[currentRound - 1];
  }

  #shouldGo() {
    const randomNumber = getRandomNumberInRange(
      NUMERIC.randomNumberLower,
      NUMERIC.randomNumberUpper
    );

    return randomNumber >= NUMERIC.moveStandard;
  }
}

export default Car;
