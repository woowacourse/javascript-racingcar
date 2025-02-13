class Car {
  name;
  position;

  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  movePosition() {
    this.position += 1;
  }
}

export default Car;
