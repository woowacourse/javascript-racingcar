class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = [1];
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  getLast() {
    return this.#position[this.#position.length - 1];
  }

  move(randomNumber) {
    if (randomNumber > 3) {
      this.#position.push(this.#position[this.#position.length - 1] + 1);
      return;
    }

    this.#position.push(this.#position[this.#position.length - 1]);
  }
}

module.exports = Car;
