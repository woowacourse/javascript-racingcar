export default class Car {
  constructor(name) {
    this.name = name;
    this.racingCount = 0;
  }

  move() {
    if (this.random() < 4) {
      return;
    }
    this.racingCount += 1;
  }

  random() {
    return Math.floor(Math.random() * 9);
  }
}
