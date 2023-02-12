class Car {
  #name;
  #trace;

  constructor(name) {
    this.#name = name;
    this.#trace = [1];
  }

  getName() {
    return this.#name;
  }

  getTrace() {
    return this.#trace;
  }

  getPosition() {
    return this.#trace[this.#trace.length - 1];
  }

  move(randomNumber) {
    if (randomNumber > 3) {
      this.#trace.push(this.#trace[this.#trace.length - 1] + 1);
      return;
    }

    this.#trace.push(this.#trace[this.#trace.length - 1]);
  }
}

module.exports = Car;
