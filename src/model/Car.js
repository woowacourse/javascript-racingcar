class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  getName() {
    return this.name;
  }

  moveForward() {
    this.distance = this.distance + 1;
  }
}

export default Car;
