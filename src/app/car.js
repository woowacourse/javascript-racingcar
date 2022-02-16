import { generateId } from '../lib/utils.js';

class Car {
  static carIdSet = new Set();

  constructor(name) {
    this.id = generateId(Car.carIdSet);
    this.#init(this.id, name);
  }

  goForward() {
    this.progress += 1;
  }

  #init(id, name) {
    this.name = name;
    this.progress = 0;
    Car.carIdSet.add(id);
  }
}

export default Car;
