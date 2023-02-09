class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  getRaceState() {
    const name = this.#name;
    const position = this.#position;

    return { name, position };
  }

  move() {
    this.#position += 1;
  }
}

export default Car;
