import { GAME_NUMBERS } from '../constant/index.js';
import { generateRandomNumber } from '../utils/random.js';
import { splitCarNames } from '../utils/string.js';
import {
  checkValidCarNames,
  checkValidRacingCount,
} from '../utils/validatior.js';
import Car from './Car.js';

export default class RacingCarModel {
  constructor() {
    this.cars = [];
    this.racingCount = GAME_NUMBERS.INIT_RACING_COUNT;
    this.prevRaceResult = {};
  }

  setCars(carNames) {
    const splitedCarNames = splitCarNames(carNames);
    checkValidCarNames(splitedCarNames);
    this.cars = splitedCarNames.map((name) => new Car(name));
  }

  setRacingCount(count) {
    checkValidRacingCount(count);
    this.racingCount = count;
  }

  getRacingCount = () => this.racingCount;

  getCarsName = () => this.cars.map((car) => car.name);

  getPrevRaceResult = () => ({ ...this.prevRaceResult });

  getCars = () => this.cars;

  initPrevRaceResult() {
    this.cars.forEach((car) => {
      this.prevRaceResult[car.name] = GAME_NUMBERS.INIT_CAR_FORWARD_COUNT;
    });
  }

  racePerSecond() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.playTurn();
        resolve();
      }, GAME_NUMBERS.DELAY_PER_RACE);
    });
  }

  playTurn() {
    this.cars.forEach((car) => {
      this.race(car);
    });
  }

  getCurrentRacingResult(prevRaceResult) {
    return this.cars.reduce((acc, car) => {
      acc[car.name] = car.forwardCount - prevRaceResult[car.name];
      return acc;
    }, {});
  }

  race(car) {
    if (generateRandomNumber() >= GAME_NUMBERS.FORWARD_STANDARD_NUMBER) {
      car.move();
      this.prevRaceResult[car.name] += 1;
    }
  }

  pickWinners() {
    const maxCount = Math.max(...this.cars.map((car) => car.forwardCount));

    return this.cars
      .filter((car) => car.forwardCount === maxCount)
      .map((car) => car.name)
      .join(', ');
  }

  resetGameStatus() {
    this.cars = [];
    this.racingCount = GAME_NUMBERS.INIT_RACING_COUNT;
  }
}
