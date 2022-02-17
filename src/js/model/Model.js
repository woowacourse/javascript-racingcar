import Car from './Car.js';
import { setIntervalForDefinedTimes, cloneObject } from '../utils/utils.js';
import { RACE_INTERVAL } from '../configs/constants.js';

export default class Model {
  constructor() {
    this.isRacing = false;
    this.carList = [];
    this.winners = [];
  }

  async createCarList(carNameList) {
    this.removeCarList();
    this.insertCarList(carNameList);

    return this.generatePayload();
  }

  async startRace(racingCount, callback = () => {}) {
    this.beforeRace(callback);
    await this.race(racingCount, callback);
    this.afterRace(callback);

    return this.generatePayload();
  }

  beforeRace(callback) {
    this.initRace();
    this.isRacing = true;
    callback(this.generatePayload());
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
    callback(this.generatePayload());
  }

  afterRace(callback) {
    this.isRacing = false;
    this.getWinners();
    callback(this.generatePayload());
  }

  getWinners() {
    const maxDistance = Math.max(...this.carList.map((car) => car.distance));
    this.winners = this.carList
      .filter((car) => car.distance === maxDistance)
      .map((winner) => winner.name);
  }

  async restart() {
    this.removeCarList();
    this.winners = [];

    return this.generatePayload();
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

  generatePayload() {
    return cloneObject({
      isRacing: this.isRacing,
      carList: this.carList,
      winners: this.winners,
    });
  }
}
