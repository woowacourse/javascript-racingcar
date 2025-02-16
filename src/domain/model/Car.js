import { CONFIG } from '../../constants/config.js';

class Car {
  #position = CONFIG.INITIAL_NUMBER;

  constructor(name) {
    this.name = name;
  }

  move(condition) {
    if (condition) {
      this.#position += 1;
    }
  }

  getPosition() {
    return this.#position;
  }
}
export default Car;
