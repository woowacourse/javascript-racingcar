import Car from './Car.js';

export default class Model {
  constructor() {
    this.carList = [];
  }

  createCarList(carNameList, callback) {
    this.removeCarList();
    this.insertCarList(carNameList);

    callback(this.carList);
  }

  startRace(racingCount, callback) {
    this.initRace();

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
    this.removeCarList();

    callback({ carList: this.carList, winners: [] });
  }

  removeCarList() {
    this.carList = [];
  }

  insertCarList(carNameList) {
    this.carList = carNameList.map((name) => new Car(name));
  }

  initRace() {
    this.carList.forEach((car) => car.initDistance());
  }
}
