import Car from "./Car.js";
import { validateUniqueCarNames, validateCarsLength } from "../validate.js";
import { ERROR_MESSAGE } from "../constants/message.js";
import { STANDARD_VALUE } from "../constants/standardValue.js";

export default class Cars {
  static MIN_LENGTH = STANDARD_VALUE.minCarsLength;
  static MAX_LENGTH = STANDARD_VALUE.maxCarsLength;

  #cars;

  constructor(cars) {
    this.#validate(cars);
    this.#cars = cars;
  }

  goAll() {
    this.#cars.forEach((car) => car.go());
  }

  getMileageBoard() {
    return this.#cars.map((car) => ({
      name: car.getName(),
      mileage: car.getMileage(),
    }));
  }

  getFirstPlaceNames() {
    const firstPlaceCars = this.#getFirstPlace();
    return firstPlaceCars.map((car) => car.getName());
  }

  #getFirstPlace() {
    const maxMileage = this.#getMaxMileage();
    return this.#cars.filter((car) => car.getMileage() === maxMileage);
  }

  #getMaxMileage() {
    return Math.max(...this.#cars.map((car) => car.getMileage()));
  }

  #validate(cars) {
    this.#validateType(cars);

    const names = cars.map((car) => car.getName());

    validateCarsLength(cars, {
      min: Cars.MIN_LENGTH,
      max: Cars.MAX_LENGTH,
    });
    validateUniqueCarNames(names);
  }

  #validateType(cars) {
    if (!cars.every((car) => car instanceof Car)) {
      throw new Error(ERROR_MESSAGE.notCarType);
    }
  }
}
