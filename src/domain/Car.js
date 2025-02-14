import { getRandomInt } from '../helpers/utils.js';

export default class Car {
  position;
  name;

  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  moveForward() {
    const randomNumber = getRandomInt(10);
    if (randomNumber >= 4) this.position++;
  }
}
