class Car {
  #name;
  #progressCount;

  static PROGRESS_CONDITION_NUMBER = 4;

  constructor(name) {
    this.#name = name;
    this.#progressCount = 0;
  }

  tryProgress(conditionNumber) {
    if (this.canProgress(conditionNumber)) {
      this.#progressCount++;
    }
  }

  canProgress(conditionNumber) {
    return conditionNumber >= Car.PROGRESS_CONDITION_NUMBER;
  }

  getName() {
    return this.#name;
  }

  getProgressCount() {
    return this.#progressCount;
  }
}

module.exports = Car;
