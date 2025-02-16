import { ERROR_MESSAGE } from '../constant/message.js';
import { GAME_RULE } from '../constant/rule.js';
import { isInRange } from '../util/validations.js';

class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#validateName(name);
    this.#name = name;
  }

  #validateName(name) {
    if (!isInRange(name.length, GAME_RULE.carNameLength.min, GAME_RULE.carNameLength.max))
      throw new Error(ERROR_MESSAGE.carNameLength);
  }

  move() {
    this.#position += GAME_RULE.moveDistance;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
