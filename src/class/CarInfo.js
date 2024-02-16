import getRandomNumberInRange from '../utils/getRandomNumberInRange.js';
import CONSTANT from '../CONSTANTS/index.js';

const { NUMERIC } = CONSTANT;

class CarInfo {
  #name;
  #position;
  #tryCount;
  constructor(name, tryCount) {
    this.#name = name;
    this.#tryCount = tryCount;
  }

  getName() {
    return this.#name;
  }

  getPositionWhen(count) {
    return this.#position[count];
  }

  setPosition() {
    this.#position = [this.#doesGo() ? NUMERIC.moveDistance : 0];
    let lastPosition = this.#position[0];

    for (let nowCount = 1; nowCount < this.#tryCount; nowCount++) {
      this.#position.push(
        lastPosition + (this.#doesGo() ? NUMERIC.moveDistance : 0)
      );
      lastPosition = this.#position[nowCount];
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
