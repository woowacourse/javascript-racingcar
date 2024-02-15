import AppError from '../utils/Error';

const NAME_LENGTH_RANGE = Object.freeze({
  MIN: 1,
  MAX: 5,
});

const MIN_MOVE_THRESHOLD = 4;
const MOVE_DISTANCE = 1;

const ERROR_MESSAGE = `자동차 이름 길이는 ${NAME_LENGTH_RANGE.MIN}자 이상 ${NAME_LENGTH_RANGE.MAX}자 이하여야합니다.`;

const NAME_LENGTH_RANGE = Object.freeze({
  min: 1,
  max: 5,
});

const MIN_MOVE_THRESHOLD = 4;
const MOVE_DISTANCE = 1;

const ERROR_MESSAGE = `자동차 이름 길이는 ${NAME_LENGTH_RANGE.min}자 이상 ${NAME_LENGTH_RANGE.max}자 이하여야합니다.`;

export default class Car {
  #name;

  #distance = 0;

  constructor(name) {
    Car.checkName(name);
    this.#name = name;
  }

  static checkName(name) {
    if (
      NAME_LENGTH_RANGE.MAX < name.length ||
      name.length < NAME_LENGTH_RANGE.MIN
    ) {
      throw new AppError(ERROR_MESSAGE);
    }
  }

  move(randomNum) {
    if (randomNum >= MIN_MOVE_THRESHOLD) {
      this.#distance += MOVE_DISTANCE;
    }
  }

  getDistance() {
    return this.#distance;
  }

  getName() {
    return this.#name;
  }
}
