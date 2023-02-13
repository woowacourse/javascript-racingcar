class Attempts {
  #count;

  constructor(count) {
    this.#count = count;
  }

  getAttemptsCount() {
    return this.#count;
  }
}

module.exports = Attempts;
