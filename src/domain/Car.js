import { getRandomInt } from '../utils.js'

export default class Car {
  position;
  name;

  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  go() {
    const randomNumber = getRandomInt(10);
    if (randomNumber >= 4) this.position++;
  }
}
