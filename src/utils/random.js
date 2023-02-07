class Random {
  constructor() {}

  static pickNumberInRange(startInclusive, endInclusive) {
    Random.#validateRange(startInclusive, endInclusive);

    startInclusive = Math.ceil(startInclusive);

    return (
      Math.floor(Math.random() * (endInclusive + 1 - startInclusive)) +
      startInclusive
    );
  }

  static #isNumber(value) {
    return typeof value === 'number';
  }

  static #validateRange(startInclusive, endInclusive) {
    if (!Random.#isNumber(startInclusive) || !Random.#isNumber(endInclusive)) {
      throw new Error('arguments must be numbers.');
    }

    if (startInclusive < Number.MIN_SAFE_INTEGER) {
      throw new Error(
        'startInclusive cannot be less than Number.MIN_SAFE_INTEGER'
      );
    }

    if (endInclusive > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        'endInclusive cannot be greater than Number.MAX_SAFE_INTEGER.'
      );
    }

    if (startInclusive > endInclusive) {
      throw new Error(
        `startInclusive ${startInclusive} cannot be greater than endInclusive ${endInclusive}.`
      );
    }

    if (endInclusive - startInclusive >= Number.MAX_VALUE) {
      throw new Error('the input range is too large.');
    }
  }
}

module.exports = Random;
