class Car {
  static MIN_NAME_LENGTH = 1;
  static MAX_NAME_LENGTH = 5;

  static VALID_NAME_LENGTH = `자동차의 이름은 최소 ${Car.MIN_NAME_LENGTH}자, 최대 ${Car.MAX_NAME_LENGTH}자입니다.`;

  #name;
  #position;

  constructor(name) {
    Car.#validateCarName(name);

    this.#name = name;
    this.#position = 0;
  }

  static #validateCarName(name) {
    if (!Car.#isValidNameLength(name)) {
      throw new Error(Car.VALID_NAME_LENGTH);
    }
  }

  static #isValidNameLength(name) {
    return [...name].length >= Car.MIN_NAME_LENGTH && [...name].length <= Car.MAX_NAME_LENGTH;
  }

  move() {
    this.#position += 1;
  }

  getRaceState() {
    const name = this.#name;
    const position = this.#position;

    return { name, position };
  }

  compareTo(other) {
    if (this.#position > other.#position) return this;

    return other;
  }

  isSamePosition(other) {
    return this.#position === other.#position;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
