import { validateCarNames } from '../validation/validators.js';
import ValidationError from '../validation/validation-error.js';
import CarModel from './car.model.js';

class RacingCarGameModel {
  constructor() {
    this.cars = [];
  }

  getCars() {
    return this.cars;
  }

  getCarNames() {
    return this.cars.map((car) => car.name).join(',');
  }

  updateCars(carNames) {
    const { hasError, errorMessage } = validateCarNames(carNames);
    if (hasError) {
      throw new ValidationError(errorMessage);
    }
    this.cars = carNames.split(',').map((carName) => new CarModel(carName.trim()));
  }
}

export default RacingCarGameModel;
