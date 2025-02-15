import Car from "../domain/Car.js";
import { INFO_MESSAGE } from "../config/constants.js";
import { validateCarNames, validateAttempt } from "../utils/validate.js";
import readLineAsync from "./Input.js";

export const getCarNames = async () => {
  while (true) {
    const name = await readLineAsync(INFO_MESSAGE.CAR_NAMR_INPUT);
    const carNames = name.split(",");
    try {
      let cars = carNames.map((name) => new Car(name));
      validateCarNames(cars, carNames);
      return cars;
    } catch (error) {
      console.log(error.message);
    }
  }
};

export const getAttempt = async () => {
  while (true) {
    const attempt = Number(await readLineAsync(INFO_MESSAGE.ATTEMPT_INPUT));
    try {
      validateAttempt(attempt);
      return attempt;
    } catch (error) {
      console.log(error.message);
    }
  }
};
