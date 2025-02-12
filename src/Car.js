class Car {
  constructor(name) {
    this.position = 0;
    this.name = name;
  }

  moveOneStep() {
    this.position += 1;
  }
}

export default Car;
