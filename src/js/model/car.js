export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  moveForward(number) {
    if (number >= 4) {
      this.position++;
      return true;
    }
    return false;
  }
}
