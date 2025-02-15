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

export const displayWinner = (winners) => {
  console.log(`${INFO_MESSAGE.WINNER_TITLE}${winners.join(", ")}`);
};
