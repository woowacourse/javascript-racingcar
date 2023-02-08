class Car {
  #name;
  #position;

  constructor (name) {
    this.#name = name;
    this.#position = 0;   
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  move(number) {
    if (number >= 4) {
      this.#position += 1;
    }
  }
};

module.exports = Car;
