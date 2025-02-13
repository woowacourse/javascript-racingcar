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
    console.log("양수");
    return this.#throwIfInValid(number <= 0);
  }

  isNumeric(number) {
    console.log("숫자");
    return this.#throwIfInValid(Number.isNaN(number));
  }

  isInteger(number) {
    console.log("정수");
    return this.#throwIfInValid(!Number.isInteger(number));
  }
}

export default Validate;
