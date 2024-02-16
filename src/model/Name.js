import ERROR_MESSAGE from '../error/message.js';

export const MIN_NAME_LENGTH = 1;
export const MAX_NAME_LENGTH = 5;

class Name {
  #name;

  constructor(name) {
    this.#validate(name);

    this.#name = name;
  }

  #validate(name) {
    if (name.length < MIN_NAME_LENGTH || name.length > MAX_NAME_LENGTH) {
      throw new Error(`${ERROR_MESSAGE.nameLength} ${ERROR_MESSAGE.retry}`);
    }
  }

  getName() {
    return this.#name;
  }
}

export default Name;
