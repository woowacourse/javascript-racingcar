import { isInRange } from '../utils/validations.js';

class Car {
  name;
  position = 0;
  history = [];

  constructor(name) {
    this.#validateName(name);
    this.name = name;
  }

  #validateName(name) {
    if (!isInRange(name.length, 1, 5)) throw new Error(`[ERROR] 자동차 이름은 1에서 5자 사이여야 합니다.`);
  }

  move(isMove) {
    this.position += Number(isMove);

    this.history.push(this.position);
  }
}

export default Car;
