class Validate {
  #throwIfInValid(condition) {
    if (condition) {
      throw new Error();
    }
    return this;
  }

  isBelowLimit(carName, limit) {
    return this.#throwIfInValid(carName.length > limit);
  }

  isPositiveLength(carName) {
    return this.#throwIfInValid(carName.length <= 0);
  }

  isPositiveNumber(number) {
    return this.#throwIfInValid(number <= 0);
  }

  isNumeric(number) {
    return this.#throwIfInValid(Number.isNaN(number));
  }

  isInteger(number) {
    return this.#throwIfInValid(!Number.isInteger(number));
  }
}

export default Validate;
