import { DELIMITERS, MAX_RANDOM_VALUE, MIN_RANDOM_VALUE } from "./constants.js";
import { getAttempt, getCarNames } from "./InputHandler.js";
import {
  displayRaceResult,
  displayResultTitle,
  displayWinner,
} from "./OutputHandler.js";
import Car from "./Car.js";
import { validateAttempt, validateCarNames } from "./validate.js";

export const startRace = async () => {
  const carNames = await getValidCarNames();
  const cars = createCars(carNames);
  const attempt = await getValidAttempt();
  // 체크포인트 ✅
  displayResultTitle();
  for (let i = 0; i < attempt; i++) {
    moveCars(cars);
    displayRaceResult(cars);
  }
  displayWinner(cars);
};

const parseCarNames = (input) => {
  return input.split(DELIMITERS.CAR_NAME).map((name) => name.trim());
};

const createCars = (carNames) => {
  return carNames.map((name) => new Car(name));
};

const getValidCarNames = async () => {
  while (true) {
    try {
      const carNames = parseCarNames(await getCarNames());
      validateCarNames(carNames);
      return carNames;
    } catch (error) {
      console.log(error.message);
    }
  }
};

const getValidAttempt = async () => {
  while (true) {
    try {
      const attempt = await getAttempt();
      validateAttempt(attempt);
      return attempt;
    } catch (error) {
      console.log(error.message);
    }
  }
};

const moveCars = (cars) => {
  for (const c of cars) {
    c.move(getRandomNumber());
  }
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * (MAX_RANDOM_VALUE - MIN_RANDOM_VALUE + 1));
};
