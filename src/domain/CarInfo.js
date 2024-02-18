import getRandomNumberInRange from "../utils/getRandomNumberInRange";
import CONSTANT from "../CONSTANTS/index";

const { NUMERIC } = CONSTANT;

class CarInfo {
  #name;
  #positions;
  #tryCount;

  constructor(name, tryCount) {
    this.#name = name;
    this.#tryCount = tryCount;
  }

  getName() {
    return this.#name;
  }

  getPositionWhen(count) {
    return this.#positions[count];
  }

  setPosition() {
    this.#positions = [this.#doesGo() ? NUMERIC.moveDistance : 0];
    let lastPosition = this.#positions[0];

    for (let nowCount = 1; nowCount < this.#tryCount; nowCount++) {
      this.#positions.push(
        lastPosition + (this.#doesGo() ? NUMERIC.moveDistance : 0)
      );
      lastPosition = this.#positions[nowCount];
    }
  }

  #doesGo() {
    return (
      getRandomNumberInRange(
        NUMERIC.randomNumberLower,
        NUMERIC.randomNumberUpper
      ) >= NUMERIC.moveStandard
    );
  }
}

export default CarInfo;
