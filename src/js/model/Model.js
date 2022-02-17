import Car from './Car.js';
import { setIntervalForDefinedTimes, cloneObject } from '../utils/utils.js';
import { INIT_DATA, RACE_INTERVAL } from '../configs/constants.js';

export default class Model {
  async init() {
    this.state = INIT_DATA || {};

    return this.generatePayload();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  generatePayload() {
    return cloneObject(this.state);
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
    this.setState({ isRacing: true });
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
    this.state.carList.forEach((car) => car.race());
    callback(this.generatePayload());
  }

  afterRace(callback) {
    this.setState({ isRacing: false });
    this.getWinners();
    callback(this.generatePayload());
  }

  getWinners() {
    const maxDistance = Math.max(
      ...this.state.carList.map((car) => car.distance)
    );

    this.setState({
      winners: this.state.carList
        .filter((car) => car.distance === maxDistance)
        .map((winner) => winner.name),
    });
  }

  async restart() {
    this.removeCarList();
    this.setState({ winners: [] });

    return this.generatePayload();
  }

  removeCarList() {
    this.setState({ carList: [] });
  }

  insertCarList(carNameList) {
    this.setState({ carList: carNameList.map((name) => new Car(name)) });
  }

  initRace() {
    this.state.carList.forEach((car) => car.initDistance());
  }
}
