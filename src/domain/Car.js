const { REGEX } = require('../constant/regex');

class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = this.#validateName(name);
    this.#position = [1];
  }

  #validateName(name) {
    if (name.length > 5) throw new Error('[ERROR] 이름은 5자 이하여야 합니다.');

    if (!REGEX.korean.test(name) || !REGEX.english.test(name)) {
      throw new Error('[ERROR] 문자만 입력해야 합니다.');
    }

    return this;
  }

  move(randomNumber) {
    if (randomNumber > 3) {
      this.#position.push(this.#position[this.#position.length - 1] + 1);
    }
  }
}

module.exports = Car;
