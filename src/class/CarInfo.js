import getRandomNumberInRange from '../utils/getRandomNumberInRange.js';
import CONSTANT from '../CONSTANTS/index.js';

const { NUMERIC } = CONSTANT;

class CarInfo {
  #name;
  #position;
  constructor(name, maxTryCount) {
    this.#name = name;
    this.#initPosition(maxTryCount);
  }

  getName() {
    return this.#name;
  }

  getPositionWhen(count) {
    return this.#position[count];
  }

  #initPosition(maxTryCount) {
    this.#position = Array.from({ length: maxTryCount }).reduce(
      array => {
        array.push(array[array.length - 1] + this.#getNextMoving());
        return array;
      },
      [0]
    );
    this.#position.shift();
  }

  #getNextMoving() {
    return this.#doesGo() ? NUMERIC.moveDistance : 0;
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
