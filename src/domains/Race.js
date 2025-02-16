import Car from "./Car.js";
import { CAR_SETTING, TRY_NUMBER_SETTING } from "../constants/setting.js";
import { ERROR_MESSAGE } from "../constants/message.js";

export default class Race {
  createCars(names) {
    return names.map((name) => new Car(name));
  }

  validateInputCar(names) {
    this.#validateCarCount(names);
    this.#validateDuplicateCarName(names);
  }

  #validateCarCount(names) {
    if (
      names.length < CAR_SETTING.minCarCount ||
      names.length > CAR_SETTING.maxCarCount
    ) {
      throw new Error(ERROR_MESSAGE.carCount);
    }
  }

  #validateDuplicateCarName(names) {
    if (new Set(names).size !== names.length) {
      throw new Error(ERROR_MESSAGE.duplicateCarName);
    }
  }

  validateInputTryNumber(tryNumber) {
    this.#validateTryNumberSize(tryNumber);
    this.#validateTryNumberPositiveInteger(tryNumber);
  }

  #validateTryNumberSize(tryNumber) {
    if (
      tryNumber < TRY_NUMBER_SETTING.minTryNumber ||
      tryNumber > TRY_NUMBER_SETTING.maxTryNumber
    ) {
      throw new Error(ERROR_MESSAGE.tryNumberRange);
    }
  }

  #validateTryNumberPositiveInteger(tryNumber) {
    if (!Number.isInteger(tryNumber)) {
      throw new Error(ERROR_MESSAGE.tryNumberNotPositiveInteger);
    }
  }

  race(cars) {
    cars.forEach((car) => {
      const isCanMove = Car.isCanMove();
      car.move(isCanMove);
    });
  }

  getWinner(cars) {
    const positions = cars.map((car) => car.getPosition());
    const maxPosition = Math.max(...positions);
    const winnerCars = cars.filter((car) => car.getPosition() === maxPosition);
    const winnerNames = winnerCars.map((car) => car.getName());
    return winnerNames;
  }
}
