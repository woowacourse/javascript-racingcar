import Model from '../core/Model.js';
import Car from './Car.js';
import { setIntervalForDefinedTimes } from '../utils/utils.js';
import { INIT_DATA, RACE_INTERVAL } from '../configs/constants.js';

export default class RacingCarGameModel extends Model {
  async init(state = INIT_DATA) {
    this.state = state;

    return this.generatePayload();
  }

  async createCarList(carNameList) {
    this.setCarList(carNameList);

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

  setCarList(carNameList) {
    this.setState({ carList: carNameList.map((name) => new Car(name)) });
  }

  initRace() {
    this.state.carList.forEach((car) => car.initDistance());
  }
}
