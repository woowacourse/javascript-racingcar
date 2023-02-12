import Car from './Car';
import { randomNumberBetween } from '../util/Random';

class Race {
  static RANDOM_NUMBER_MIN = 0;
  static RANDOM_NUMBER_MAX = 9;
  static MOVE_CONDITION = 4;

  static STEP_IS_NOT_INTEGER = '시도할 횟수는 정수여야합니다.';
  static STEP_IS_NOT_POSITIVE = '시도할 횟수는 양의 정수를 입력해주세요.';

  #cars;
  #raceStep;

  constructor(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  setRaceStep(raceStep) {
    Race.#validateRaceStep(raceStep);

    this.#raceStep = raceStep;
  }

  static #validateRaceStep(raceStep) {
    if (!Number.isInteger(raceStep)) {
      throw new Error(Race.STEP_IS_NOT_INTEGER);
    }

    if (Number(raceStep) < 0) {
      throw new Error(Race.STEP_IS_NOT_POSITIVE);
    }
  }

  moveOnce() {
    this.#cars.forEach((car) => {
      const randomNumber = randomNumberBetween(Race.RANDOM_NUMBER_MIN, Race.RANDOM_NUMBER_MAX);

      if (randomNumber >= Race.MOVE_CONDITION) car.move();
    });

    this.#raceStep -= 1;
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    const positions = this.#cars.map((car) => car.getRaceState().position);
    const maxPosition = Math.max(...positions);

    return this.#cars.filter((car) => car.getRaceState().position === maxPosition);
  }
}

export default Race;
