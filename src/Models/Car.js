import { checkIsEmpty, checkCarNameLength, checkCarNameDuplicate, checkCarCount } from '../validates/carValidates.js';

class Car {
  #position = 0;
  #history = [];

  constructor(name, names) {
    checkIsEmpty(name);
    checkCarNameLength(name);
    checkCarCount(names);
    checkCarNameDuplicate(names);
    this.name = name;
  }

  getPosition() {
    return this.#position;
  }

  getHistory(index) {
    if (index) {
      return this.#history[index];
    } else {
      return this.#history;
    }
  }

  movePosition(isMove) {
    this.#position += Number(isMove);
    this.#history.push(this.#position);
  }
}

export default Car;
