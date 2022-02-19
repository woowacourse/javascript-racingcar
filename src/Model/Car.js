const MIN_NUMBER_OF_MOVE = 4;
class Car {
  constructor(carName) {
    this.name = carName;
    this.count = 0;
  }

  move() {
    this.count += 1;
  }

  canMove(randomRaceScore) {
    if (randomRaceScore < MIN_NUMBER_OF_MOVE) {
      return false;
    }
    return true;
  }
}

export default Car;
