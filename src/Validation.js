class Validation {
  static validateCarNames(names) {
    if (!Validation.#isCarNumberValid(names)) {
      throw new Error('에러메시지');
    }
  }

  static #isCarNumberValid(names) {
    return names.length >= 2;
  }
}

module.exports = Validation;
