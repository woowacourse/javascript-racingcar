import { MAX_RANDOM_VALUE, MIN_RANDOM_VALUE } from "./constants.js";
import { getAttempt, getCarNames } from "./InputHandler.js";
import {
  displayRaceResult,
  displayResultTitle,
  displayWinner,
} from "./OutputHandler.js";

export const start = async () => {
  const cars = await getCarNames();
  const attempt = await getAttempt();
  displayResultTitle();
  for (let i = 0; i < attempt; i++) {
    moveCars(cars);
    displayRaceResult(cars);
  }
  displayWinner(cars);
};

const moveCars = (cars) => {
  for (const c of cars) {
    c.move(getRandomNumber());
  }
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * (MAX_RANDOM_VALUE - MIN_RANDOM_VALUE + 1));
};
