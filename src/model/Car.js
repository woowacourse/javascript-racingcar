import ERROR_MESSAGE from '../error/message.js';
import Random from './Random.js';

export const MIN_NAME_LENGTH = 1;
export const MAX_NAME_LENGTH = 5;
const FORWARD = 1;
const FORWARD_CONDITION = 4;

class Car {
  #name;
  #location = 0;

  constructor(name) {
    this.#validate(name);

    this.#name = name;
  }

  #validate(name) {
    if (name.length < MIN_NAME_LENGTH || name.length > MAX_NAME_LENGTH) {
      throw new Error(`${ERROR_MESSAGE.nameLength} ${ERROR_MESSAGE.retry}`);
    }
  }

  forward() {
    const randomNumber = Random.create();

    if (randomNumber >= FORWARD_CONDITION) this.#location += FORWARD;
  }

  getName() {
    return this.#name;
  }

  getLocation() {
    return this.#location;
  }
}

export default Car;
