class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  move(go) {
    if (go) {
      this.#position += 1;
    }
  }
}

module.exports = Car;
