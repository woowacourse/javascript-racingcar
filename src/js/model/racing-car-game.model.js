import { validateCarNames, validateRacingCount } from '../validation/validators.js';
import ValidationError from '../validation/validation-error.js';
import CarModel from './car.model.js';
import { ERROR_MESSAGES } from '../constants.js';

class RacingCarGameModel {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
  }

  getCars() {
    return this.cars;
  }

  getCarNames() {
    return this.cars
      .map((car) => car.name)
      .join(', ')
      .trim();
  }

  getRacingCount() {
    return this.racingCount;
  }

  updateCars(carNames) {
    const { hasError, errorMessage } = validateCarNames(carNames);
    if (hasError) {
      throw new ValidationError(errorMessage);
    }
    this.cars = carNames.split(',').map((carName) => new CarModel(carName.trim()));
  }

  updateRacingCount(racingCount) {
    if (this.cars.length === 0) {
      throw new Error(ERROR_MESSAGES.EMPTY_CAR_NAME);
    }
    const { hasError, errorMessage } = validateRacingCount(racingCount);
    if (hasError) {
      throw new ValidationError(errorMessage);
    }
    this.racingCount = parseInt(racingCount, 10);
  }

  tryMoveCars() {
    this.cars.map((car) => car.tryMove());
  }

  findWinners() {
    const maxDistance = this.cars.reduce((acc, { distance }) => Math.max(acc, distance), 0);
    return this.cars.filter(({ distance }) => distance === maxDistance).map(({ name }) => name);
  }

  resetDistances() {
    this.cars.forEach((car) => car.resetDistance());
  }

  reset() {
    this.cars = [];
    this.racingCount = 0;
  }
}

export default RacingCarGameModel;
