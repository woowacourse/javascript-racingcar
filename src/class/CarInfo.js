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
    this.#position = Array(this.#tryCount)
      .fill(null)
      .reduce(this.getPositionReducer(this.#doesGo), []);
  }

  getPositionReducer(goFunc) {
    return array => {
      if (array.length === 0) {
        array.push(goFunc() ? NUMERIC.moveDistance : 0);
        return array;
      }
      array.push(
        array[array.length - 1] + (goFunc() ? NUMERIC.moveDistance : 0)
      );
      return array;
    };
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
