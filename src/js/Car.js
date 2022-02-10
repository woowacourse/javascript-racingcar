export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    this.distance += 1;
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  race() {
    const randomNumber = this.getRandomNumber(1, 9);

    if (randomNumber >= 4) {
      this.move();
    }

    return { name: this.name, distance: this.distance };
  }

  initDistance() {
    this.distance = 0;
  }
}
