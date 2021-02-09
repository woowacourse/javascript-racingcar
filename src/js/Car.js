export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  run() {
    this.distance += 1;
  }

  getDistance() {
    return this.distance;
  }
}