export default class Car {
  constructor(name) {
    this.name = name;
    this.racingCount = 0;
  }

  getName() {
    return this.name;
  }

  move() {
    this.racingCount += 1;
  }
}
