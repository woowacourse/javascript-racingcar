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
  return Math.floor(Math.random() * 10);
};
