import Car from './Car.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
    this.round = 0;
  }

  moveCars() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  set players(names) {
    names.forEach((name) => {
      this.cars.push(new Car(name));
    });
  }

  goToNextTurn() {
    this.moveCars();
    this.round -= 1;
  }

  get winners() {
    return this.findWinners();
  }

  findMaxRecord() {
    let maxRecord = 0;

    this.cars.forEach((car) => {
      if (car.position > maxRecord) {
        maxRecord = car.position;
      }
    });

    return maxRecord;
  }

  findWinners() {
    const winnerList = [];
    const maxRecord = this.findMaxRecord();

    this.cars.forEach((car) => {
      if (car.position === maxRecord) {
        winnerList.push(car.name);
      }
    });

    return winnerList;
  }
}
