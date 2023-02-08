class Car {
  #name;
  #progressCount;

  constructor(name) {
    this.#name = name;
    this.#progressCount = 0;
  }

  tryProgress(randomNumber) {
    if (this.canProgress(randomNumber)) {
      this.#progressCount++;
    }
  }

  canProgress(randomNumber) {
    return randomNumber >= 4;
  }

  getName() {
    return this.#name;
  }

  getProgressCount() {
    return this.#progressCount;
  }
}

module.exports = Car;
