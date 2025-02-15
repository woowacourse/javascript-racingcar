import Car from "./Car.js";
import { MAX_RANDOM_VALUE, MIN_RANDOM_VALUE } from "../config/constants.js";
import { validateCars } from "../utils/validate.js";
import { getAttempt, getCarNames } from "../view/inputHandler.js";
import {
  displayRaceResult,
  displayResultTitle,
  displayWinners,
} from "../view/outputHandler.js";

export const raceStart = async () => {
  const cars = await getCars();
  const attempt = await getAttempt();

  displayResultTitle();
  for (let i = 0; i < attempt; i++) {
    moveCars(cars, moveCondition);
    displayRaceResult(cars);
  }

  const winners = determineWinners(cars);
  displayWinners(winners);
};

const getCars = async () => {
  while (true) {
    const carNames = (await getCarNames())
      .split(",")
      .map((name) => name.trim());
    try {
      let cars = carNames.map((name) => new Car(name));
      validateCars(cars, carNames);
      return cars;
    } catch (error) {
      console.log(error.message);
    }
  }
};

const moveCars = (cars) => {
  cars.forEach((car) => car.move(getRandomNumber()));
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * (MAX_RANDOM_VALUE - MIN_RANDOM_VALUE + 1));
};

const determineWinners = (cars) => {
  const maxPosition = Math.max(...cars.map((car) => car.position));
  const winners = cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);
  return winners;
};
