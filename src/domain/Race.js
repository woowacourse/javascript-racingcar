import { MAX_RANDOM_VALUE, MIN_RANDOM_VALUE } from "../config/constants.js";
import { getAttempt, getCarNames } from "../io/InputHandler.js";
import {
  displayRaceResult,
  displayResultTitle,
  displayWinner,
} from "../io/OutputHandler.js";
import { validateCarNames } from "../utils/validate.js";
import Car from "./Car.js";

export const start = async () => {
  const cars = await getCars();
  const attempt = await getAttempt();
  displayResultTitle();
  for (let i = 0; i < attempt; i++) {
    moveCars(cars);
    displayRaceResult(cars);
  }
  const winners = determineWinners(cars);
  displayWinner(winners);
};

const moveCars = (cars) => {
  for (const c of cars) {
    c.move(getRandomNumber());
  }
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * (MAX_RANDOM_VALUE - MIN_RANDOM_VALUE + 1));
};

const getCars = async () => {
  while (true) {
    const name = await getCarNames();
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

const determineWinners = (cars) => {
  const maxPosition = Math.max(...cars.map((car) => car.position));
  const winners = cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);
  return winners;
};
