import { CAR_MOVE_FORWARD } from '../Constants/rules.js';

export default class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move(moveCondition) {
    if (moveCondition >= CAR_MOVE_FORWARD) {
      // TODO: 외부에서 처리
      this.#position += 1;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}
