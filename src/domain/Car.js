class Car {
  constructor(raceCarName) {
    this.position = 0;
    this.raceCarName = raceCarName;
  }

  moveOneStep() {
    this.position += 1;
  }
}

export default Car;
