import Car from './Car.js';

export default class Model {
  constructor() {
    this.carList = [];
  }

  createCarList(carNameList, callback) {
    this.carList = carNameList.map((name) => new Car(name));

    callback(this.carList);
  }

  startRace(racingCount, callback) {
    for (let i = 0; i < racingCount; i += 1) {
      this.carList.forEach((car) => car.race());

      callback(this.carList);
    }
  }

  getWinners(callback) {
    const maxDistance = Math.max(...this.carList.map((car) => car.distance));
    const winners = this.carList
      .filter((car) => car.distance === maxDistance)
      .map((winner) => winner.name);

    callback(winners);
  }

  restart(callback) {
    this.carList = [];

    callback({ carList: this.carList, winners: [] });
  }
}
