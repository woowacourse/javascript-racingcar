class Car {
  #name;
  #positions;
  #lastPositionsIndex;

  constructor(name) {
    this.#name = name;
    //TODO: positions의 최대값(99)에 맞게 Validator 변경
    this.#positions = new Array(100).fill(0);
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
