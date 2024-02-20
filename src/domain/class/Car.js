import CONSTANTS from '../../CONSTANTS';

const { numeric } = CONSTANTS;

class Car {
  #name;
  #positions;
  #lastPositionsIndex;

  constructor(name) {
    this.#name = name;
    this.#positions = new Array(numeric.MAX_MAX_TRY_COUNT + 1).fill(0);
    this.#lastPositionsIndex = 0;
  }

  getName() {
    return this.#name;
  }

  getPositionWhen(count) {
    const isUnderLastPosition = count <= this.#lastPositionsIndex;
    if (isUnderLastPosition) return this.#positions[count + 1];
    return this.getLastPosition();
  }

  getLastTryCount() {
    return this.#lastPositionsIndex;
  }

  getLastPosition() {
    return this.#positions[this.#lastPositionsIndex];
  }

  grantTry(moveDistance) {
    this.#positions[this.#lastPositionsIndex + 1] =
      this.#positions[this.#lastPositionsIndex] + moveDistance;
    this.#lastPositionsIndex++;
  }
}
export default Car;
