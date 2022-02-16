import { validateCarNames, validateRacingCount } from '../validation/validators.js';
import ValidationError from '../validation/validation-error.js';
import CarModel from './car.model.js';

class RacingCarGameModel {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
  }

  getCars() {
    return this.cars;
  }

  getCarNames() {
    return this.cars.map((car) => car.name).join(',');
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
    const { hasError, errorMessage } = validateRacingCount(racingCount);
    if (hasError) {
      throw new ValidationError(errorMessage);
    }
    this.racingCount = parseInt(racingCount, 10);
  }
}

export default RacingCarGameModel;
