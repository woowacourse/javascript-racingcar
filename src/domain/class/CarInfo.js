import getRandomNumberInRange from '../../utils/getRandomNumberInRange.js';
import CONSTANTS from '../../CONSTANTS/index.js';

const { numeric } = CONSTANTS;

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
    return this.#doesGo() ? numeric.MOVE_DISTANCE : 0;
  }
  #doesGo() {
    return (
      getRandomNumberInRange(
        numeric.RANDOM_NUMBER_LOWER,
        numeric.RANDOM_NUMBER_UPPER
      ) >= numeric.MOVE_STANDARD
    );
  }
}
export default CarInfo;
