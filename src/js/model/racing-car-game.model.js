class RacingCarGameModel {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
  }

  getRacingCount() {
    return this.racingCount;
  }

  getCars() {
    return this.cars;
  }

  updateRacingCount(count) {}

  updateCars() {}

  moveAllCarsFoward() {}
}

export default RacingCarGameModel;
