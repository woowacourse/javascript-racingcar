import readLineAsync from "./Input.js";
import { ERROR_MESSAGE, INFO_MESSAGE } from "./constants.js";
import Car from "./Car.js";

export const start = async () => {
  const cars = await getCarNames();
  const attempt = await getAttempt();
  for (let i = 0; i < attempt; i++) {
    moveCars(cars);
  }
};

const moveCars = (cars) => {
  for (const c of cars) {
    c.move(getRandomNumber());
    console.log(c.position);
  }
};

const getCarNames = async () => {
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

const validateCarNames = (cars, carNames) => {
  if (cars.length > 10) throw Error(ERROR_MESSAGE.CAR_COUNT);
  if (carNames.length !== new Set(carNames).size)
    throw Error(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
};

const getAttempt = async () => {
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

const validateAttempt = (attempt) => {
  if (Number.isNaN(attempt)) throw Error(ERROR_MESSAGE.INVALID_ATTEMPT_NUMBER);
  else if (attempt <= 0) throw Error(ERROR_MESSAGE.ATTEMPT_TOO_LOW);
  else if (attempt > 50) throw Error(ERROR_MESSAGE.ATTEMPT_TOO_HIGH);
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};
