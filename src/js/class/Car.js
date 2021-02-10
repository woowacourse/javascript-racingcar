export class Car {
  constructor(name) {
    this.name = name;
    this.forwardCount = 0;
  }

  isForward() {
    return getRandomNumber() >= THRESHOLD;
  }

  addForwardCount() {}
}
