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
  toString() {
    return `${this.#name} : ${this.getPosition()}`;
  }
}

export default Car;
