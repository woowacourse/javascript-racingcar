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

  move(random) {
    const result = random > 3 ? this.getPosition() + 1 : this.getPosition();

    this.#trace.push(result);
  }
}

module.exports = Car;
