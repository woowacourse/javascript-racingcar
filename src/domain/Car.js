class Car {
  #position = 0;

  #name;

  constructor(name) {
    this.#name = name;
  }
  goForward() {
    this.#position++;
  }
  getPosition() {
    return "-".repeat(this.#position);
  }
  get name() {
    return this.#name;
  }
  get position() {
    return this.#position;
  }
  toString() {
    return `${this.#name} : ${this.getPosition()}`;
  }
}

export default Car;
