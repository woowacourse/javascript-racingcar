import { CONFIG } from './constants/config.js';

class Car {
  constructor(name) {
    this.name = name;
    this.position = CONFIG.ZERO;
  }

  move() {
    this.position++;
  }
}
export default Car;
