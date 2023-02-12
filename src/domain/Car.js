import { ErrorMessages } from '../constants/Messages';

class Car {
  static MIN_CAR_NAME_LENGTH = 1;
  static MAX_CAR_NAME_LENGTH = 5;

  #name;
  #position;

  constructor(name) {
    Car.#validateCarName(name);

    this.#name = name;
    this.#position = 0;
  }

  static #validateCarName(name) {
    if (!Car.#isValidLength(name)) {
      throw new Error(ErrorMessages.CAR_NAME_LENGTH_LIMIT);
    }
  }

  static #isValidLength(name) {
    return name.length >= Car.MIN_CAR_NAME_LENGTH && name.length <= Car.MAX_CAR_NAME_LENGTH;
  }

  getRaceState() {
    const name = this.#name;
    const position = this.#position;

    return { name, position };
  }

  move() {
    this.#position += 1;
  }
}

export default Car;
