export default class RacingGame {
  constructor(cars, round) {
    this.cars = cars;
    this.round = round;
  }

  moveCars() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  goToNextTurn() {
    this.moveCars();
    this.round -= 1;
  }

  get winners() {
    return this.findWinners();
  }

  // cars = [Car('east',4), Car('west',5), Car('north',2)]
  findMaxRecord() {
    let maxRecord = 0;

    this.cars.forEach((car) => {
      if (car.position > maxRecord) {
        maxRecord = car.postion;
      }
    });

    return maxRecord;
  }

  findWinners() {
    const winnerList = [];
    const maxRecord = this.findMaxRecord(this.cars);

    this.cars.forEach((car) => {
      if (car.position === maxRecord) {
        winnerList.push(car);
      }
    });

    // this.model.setWinners(winnerList);
    return winnerList;
  }
}
