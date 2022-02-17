import Car from './Car.js';
import { setIntervalForDefinedTimes } from '../utils/utils.js';
import { RACE_INTERVAL } from '../configs/constants.js';

export default class Model {
  constructor() {
    this.carList = [];
    this.isRacing = false;
  }

  createCarList(carNameList, callback) {
    this.removeCarList();
    this.insertCarList(carNameList);

    callback(this.carList, this.isRacing);
  }

  async startRace(racingCount, callback) {
    this.initRace();
    this.isRacing = true;
    callback(this.carList, this.isRacing);

    await setIntervalForDefinedTimes(
      () => {
        this.carList.forEach((car) => car.race());
        callback(this.carList, this.isRacing);
      },
      RACE_INTERVAL,
      racingCount
    );

    this.isRacing = false;

    return {
      carList: this.carList,
      isRacing: this.isRacing,
      winners: this.getWinners(),
    };
  }

  getWinners() {
    const maxDistance = Math.max(...this.carList.map((car) => car.distance));
    const winners = this.carList
      .filter((car) => car.distance === maxDistance)
      .map((winner) => winner.name);

    return winners;
  }

  restart(callback) {
    this.removeCarList();

    callback({ carList: this.carList, winners: [], isRacing: this.isRacing });
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
