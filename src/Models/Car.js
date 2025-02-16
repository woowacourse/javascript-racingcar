import Validate from './Validate.js';

class Car {
  #position = 0;
  #history = [];

  constructor(name, names) {
    Validate.checkIsEmpty(name);
    Validate.checkCarNameLength(name);
    Validate.checkCarCount(names);
    Validate.checkCarNameDuplicate(names);
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
