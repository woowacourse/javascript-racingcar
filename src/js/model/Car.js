export default class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  move() {
    this.score += 1;
  }
}
