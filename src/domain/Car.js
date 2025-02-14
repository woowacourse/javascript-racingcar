import { getRandomInt } from '../helpers/utils.js';

export default class Car {
  position;
  name;

  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  go() {
    this.position++;
  }
}
