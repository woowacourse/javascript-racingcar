import Car from "./Car.js";
import { INFO_MESSAGE } from "./constants.js";
import { validateCarNames } from "./validate.js";
import readLineAsync from "./Input.js";
import { validateAttempt } from "./validate.js";

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
