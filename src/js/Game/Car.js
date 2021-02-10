export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  run() {
    this.position += 1;
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}
