import {
  EMPTY_NUMBER,
  VALID_MAX_NUMBER,
  INIT_RACING_COUNT,
  FORWARD_STANDARD_NUMBER,
  ALERT_MESSAGE,
} from "../utils/constants.js";
import { generateRandomNumber } from "../utils/random.js";
import Car from "./Car.js";

export default class RacingCarModel {
  constructor() {
    this.cars = [];
    this.racingCount = INIT_RACING_COUNT;
  }

  setCars = (carNames) => {
    const splitedCarNames = this.splitCarNames(carNames);
    if (this.hasSpaceInName(splitedCarNames)) {
      throw new Error(ALERT_MESSAGE.HAS_EMPTY_NAME_ERROR);
    }
    if (this.isDuplicatedCarName(splitedCarNames)) {
      throw new Error(ALERT_MESSAGE.DUPLICATED_NAME_ERROR);
    }
    if (this.isEmptyName(splitedCarNames)) {
      throw new Error(ALERT_MESSAGE.EMPTY_NAME_ERROR);
    }
    if (this.hasInValidNameLength(splitedCarNames)) {
      throw new Error(ALERT_MESSAGE.HAS_INVALID_NAME_LENGTH_ERROR);
    }
    this.cars = splitedCarNames.map((name) => new Car(name));
  };

  setRacingCount = (count) => {
    if (this.isEmptyRacingCount(count)) {
      throw new Error(ALERT_MESSAGE.EMPTY_COUNT_ERROR);
    }
    this.racingCount = count;
  };

  getRacingCount = () => {
    return this.racingCount;
  };

  playTurn = () => {
    this.cars.forEach((car) => {
      this.race(car);
    });
    return this.cars;
  };

  race = (car) => {
    if (generateRandomNumber() >= FORWARD_STANDARD_NUMBER) {
      car.move();
    }
  };

  pickWinners = () => {
    const results = this.cars.map((car) => car.forward);
    const maxCount = Math.max(...results);
    return this.cars
      .filter((car) => car.forward === maxCount)
      .map((car) => car.name)
      .join(", ");
  };

  resetGameStatus = () => {
    this.cars = [];
    this.racingCount = INIT_RACING_COUNT;
  };

  splitCarNames = (carNames) => carNames.split(",");

  hasInValidNameLength = (names) =>
    names.some((name) => name.length > VALID_MAX_NUMBER);

  hasSpaceInName = (names) =>
    names.some((name) => Array.from(name).some((ch) => ch.match(/ /)));

  isDuplicatedCarName = (names) => names.length !== new Set(names).size;

  isEmptyName = (names) => names.some((name) => name.length === EMPTY_NUMBER);

  isEmptyRacingCount = (count) => !count;
}
