class Car {
  #name;
  constructor(name) {
    this.#name = name;
    this.position = 0;
  }

  get name() {
    return this.#name;
  }
}

export default Car;
