class CarModel {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  moveForward() {
    this.moveCount += 1;
  }
}

export default CarModel;
