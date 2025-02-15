import { INFO_MESSAGE } from "../config/constants.js";

export const displayResultTitle = () => {
  console.log(INFO_MESSAGE.RACE_RESULT_TITLE);
};

export const displayRaceResult = (cars) => {
  console.log(
    cars.map((car) => `${car.name} : ${"-".repeat(car.position)}`).join("\n") +
      "\n"
  );
};

export const displayWinner = (winners) => {
  console.log(`${INFO_MESSAGE.WINNER_TITLE}${winners.join(", ")}`);
};
