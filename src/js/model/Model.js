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

  async startRace(racingCount, callback = () => {}) {
    this.beforeRace(callback);
    await this.race(racingCount, callback);
    this.afterRace(callback);

    return {
      carList: this.carList,
      isRacing: this.isRacing,
      winners: this.getWinners(),
    };
  }

  beforeRace(callback) {
    this.initRace();
    this.isRacing = true;
    callback(this.carList, this.isRacing);
  }

  async race(racingCount, callback) {
    await setIntervalForDefinedTimes(
      () => {
        this.raceOneLap(callback);
      },
      RACE_INTERVAL,
      racingCount
    );
  }

  raceOneLap(callback) {
    this.carList.forEach((car) => car.race());
    callback(this.carList, this.isRacing);
  }

  afterRace(callback) {
    this.isRacing = false;
    callback(this.carList, this.isRacing);
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
