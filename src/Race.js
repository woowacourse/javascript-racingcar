import readLineAsync from "./Input.js";
import { ERROR_MESSAGE, INFO_MESSAGE } from "./constants.js";
import Car from "./Car.js";

export const start = async () => {
  await getCarNames();
  await getAttempt();
};

const getCarNames = async () => {
  while (true) {
    const name = await readLineAsync(INFO_MESSAGE.CAR_NAMR_INPUT);
    const carNames = name.split(",");
    try {
      let cars = carNames.map((name) => new Car(name));
      validateCarNames(cars, carNames);
      break;
    } catch (error) {
      console.log(error.message);
    }
  }
};

const validateCarNames = (cars, carNames) => {
  if (cars.length > 10) throw Error(ERROR_MESSAGE.CAR_COUNT);
  if (carNames.length !== new Set(carNames).size)
    throw Error(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
};

const getAttempt = async () => {
  while (true) {
    const attempt = Number(await readLineAsync(INFO_MESSAGE.ATTEMPT_INPUT));
    try {
      if (Number.isNaN(attempt))
        throw Error(ERROR_MESSAGE.INVALID_ATTEMPT_NUMBER);
      else if (attempt <= 0) throw Error(ERROR_MESSAGE.ATTEMPT_TOO_LOW);
      else if (attempt > 50) throw Error(ERROR_MESSAGE.ATTEMPT_TOO_HIGH);
      break;
    } catch (error) {
      console.log(error.message);
    }
  }
};
