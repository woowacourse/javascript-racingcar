import { INFO_MESSAGE } from "../config/constants.js";

export const displayResultTitle = () => {
  console.log(INFO_MESSAGE.RACE_RESULT_TITLE);
};

export const displayRaceResult = (cars) => {
  for (const car of cars) {
    console.log(`${car.name} : ${"-".repeat(car.position)}`);
  }
  console.log();
};

export const displayWinner = (cars) => {
  const maxPosition = Math.max(...cars.map((car) => car.position));
  const winners = cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);
  console.log(`${INFO_MESSAGE.WINNER_TITLE}${winners.join(", ")}`);
};
