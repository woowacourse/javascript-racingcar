class RacingCar {
  constructor(name) {
    this.name = name;
    this.forward = 0;
  }

  moveForward() {
    this.forward++;
  }
}

export default RacingCar;
