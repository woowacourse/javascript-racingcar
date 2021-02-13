export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
    this.isWinner = false;
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }

  getIsWinner() {
    return this.isWinner;
  }

  move() {
    const randNumber = Math.random() * 10;
    if (randNumber >= 4) {
      this.position++;
      return true;
    }
    return false;
  }

  wins() {
    this.isWinner = true;
  }
}
