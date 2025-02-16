class Car {
  #position = 0;
  #name;

  constructor(name) {
    this.#name = name;
  }
  goForward() {
    this.#position++;
  }
  get name() {
    return this.#name;
  }
  get position() {
    return this.#position;
  }
}

export default Car;
