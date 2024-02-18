class CarPosition {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = [0];
  }

  getName() {
    return this.#name;
  }

  getPositionWhen(count) {
    if (count + 1 < this.#position.length) return this.#position[count + 1];
    return this.#position[this.#position.length - 1];
  }

  getLastTryCount() {
    return this.#position.length - 2;
  }

  getLastPosition() {
    return this.#position[this.#position.length - 1];
  }

  grantTry(moveDistance) {
    this.#position.push(
      this.#position[this.#position.length - 1] + moveDistance
    );
  }
}
export default CarPosition;
