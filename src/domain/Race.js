import { randomNumberBetween } from '../util/Random';
import Car from './Car';

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
    if (!Race.#isInteger(raceStep)) {
      throw new Error(Race.STEP_IS_NOT_INTEGER);
    }

    if (!Race.#isPositive(raceStep)) {
      throw new Error(Race.STEP_IS_NOT_POSITIVE);
    }
  }

  static #isInteger(raceStep) {
    return Number.isInteger(raceStep);
  }

  static #isPositive(raceStep) {
    return raceStep > 0;
  }

  isRaceEnd() {
    return this.#raceStep === 0;
  }

  moveOneStep() {
    this.#cars.forEach((car) => {
      const randomNumber = randomNumberBetween(Race.RANDOM_NUMBER_MIN, Race.RANDOM_NUMBER_MAX);

      if (randomNumber >= Race.MOVE_CONDITION) car.move();
    });

    this.#raceStep -= 1;
  }

  getRaceStates() {
    return this.#cars.map((car) => car.getRaceState());
  }

  #findWinners() {
    const winnerCar = this.#cars.reduce((maxPositionCar, currentCar) =>
      maxPositionCar.compareTo(currentCar),
    );

    return this.#cars.filter((car) => car.isSamePosition(winnerCar));
  }

  findWinnerNames() {
    const winnerCars = this.#findWinners();

    return winnerCars.map((winnerCar) => winnerCar.getName());
  }
}

export default Race;
