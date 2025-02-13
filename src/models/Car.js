class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  moveForward(randomValue) {
    if (randomValue < 4) {
      return;
    }
    this.position++;
  }
}

export default Car;
