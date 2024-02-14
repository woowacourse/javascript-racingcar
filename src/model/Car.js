import ERROR_MESSAGE from '../error/message.js';

export const MIN_NAME_LENGTH = 1;
export const MAX_NAME_LENGTH = 5;

class Car {
  #name;
  #location;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
  }

  #validate(name) {
    if (name.length < MIN_LENGTH || name.length > MAX_LENGTH) {
      throw new Error(`${ERROR_MESSAGE.nameLength} ${ERROR_MESSAGE.retry}`);
    }
  }

  get name() {
    return this.#name;
  }
}

export default Car;
