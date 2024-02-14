class Random {
  constructor() {}

  static pickNumberInRange(min, max) {
    Random.#validateRange(min, max);

    min = Math.ceil(min);

    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }

  static #isNumber(value) {
    return typeof value === 'number';
  }

  static #validateRange(min, max) {
    if (!Random.#isNumber(min) || !Random.#isNumber(max)) {
      throw new Error('arguments must be numbers.');
    }

    if (min < Number.MIN_SAFE_INTEGER) {
      throw new Error('min cannot be less than Number.MIN_SAFE_INTEGER');
    }

    if (max > Number.MAX_SAFE_INTEGER) {
      throw new Error('max cannot be greater than Number.MAX_SAFE_INTEGER.');
    }

    if (min > max) {
      throw new Error(`min ${min} cannot be greater than max ${max}.`);
    }

    if (max - min >= Number.MAX_VALUE) {
      throw new Error('the input range is too large.');
    }
  }
}

export default Random;
