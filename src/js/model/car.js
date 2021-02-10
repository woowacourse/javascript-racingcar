export default class Car {
  constructor(name) {
    console.log("생성됨");
    this.name = name;
    this.position = 0;
  }

  moveForward = function (number) {
    if (number >= 4) {
      this.position++;
      return true;
    }
    return false;
  }
}