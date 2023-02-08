class Car {
  #name;

  #progress = [];

  constructor(name) {
    this.#name = name;
  }

  setProgress() {
    this.#progress.push('-');
  }

  getProgress() {
    return this.#progress.length;
  }

  getName() {
    return this.#name;
  }
}
module.exports = Car;
