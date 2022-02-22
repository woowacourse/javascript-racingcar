import generateRandomNumber from '../utils/random.js';
import Car from './Car.js';
import splitCarNames from '../utils/splitCarNames.js';

import { GAME_NUMBERS } from '../utils/constants.js';
import { checkValidCarNames, checkValidRacingCount } from '../utils/validator.js';

export default class RacingCarModel {
  constructor() {
    this.cars = [];
    this.racingCount = GAME_NUMBERS.INIT_RACING_COUNT;
    this.prevResult = {};
  }

  setCars = (carNames) => {
    const splitedCarNames = splitCarNames(carNames);

    checkValidCarNames(splitedCarNames);
    this.cars = splitedCarNames.map((name) => new Car(name));
  };

  setRacingCount = (count) => {
    checkValidRacingCount(count);
    this.racingCount = count;
  };

  getRacingCount = () => this.racingCount;

  getCarsName = () => this.cars.map((car) => car.name);

  initPrevResult = () => {
    this.cars.forEach((car) => {
      this.prevResult[car.name] = GAME_NUMBERS.INIT_CAR_FORWARD_COUNT;
    });
  };

  playTurn = () => {
    const prevResult = { ...this.prevResult };

    this.cars.forEach((car) => {
      this.race(car);
    });

    return this.cars.reduce((acc, car) => {
      acc[car.name] = car.forwardCount - prevResult[car.name];
      return acc;
    }, {});
  };

  getCars = () => this.cars;

  race = (car) => {
    if (generateRandomNumber() >= GAME_NUMBERS.FORWARD_STANDARD_NUMBER) {
      car.move();
      this.prevResult[car.name] += 1;
    }
  };

  racePerSecond = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        const stageInfo = this.playTurn();
        resolve(stageInfo);
      }, 1000);
    });

  pickWinners = () => {
    const maxCount = Math.max(...this.cars.map((car) => car.forwardCount));

    return this.cars
      .filter((car) => car.forwardCount === maxCount)
      .map((car) => car.name)
      .join(', ');
  };

  resetGameStatus = () => {
    this.cars = [];
    this.racingCount = GAME_NUMBERS.INIT_RACING_COUNT;
  };
}
