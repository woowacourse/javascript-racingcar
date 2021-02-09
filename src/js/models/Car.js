export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randNumber = Math.random() * 10;
    if (randNumber >= 4) {
      this.position++;
    }
  }
}
