class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  canMove() {
    const randomValue = Math.getRandomInt(0, 10);
    return randomValue >= 4;
  }

  move() {
    if (this.canMove()) {
      this.distance += 1;
    }
  }
}

export default Car;
