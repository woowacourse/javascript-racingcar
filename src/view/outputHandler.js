import { CAR_MOVE_SYMBOL, INFO_MESSAGE } from "../config/constants.js";

export const displayResultTitle = () => {
  console.log(INFO_MESSAGE.RACE_RESULT_TITLE);
};

export const displayRaceResult = (cars) => {
  console.log(
    cars
      .map((car) => `${car.name} : ${CAR_MOVE_SYMBOL.repeat(car.position)}`)
      .join("\n") + "\n"
  );
};

export const displayWinners = (winners) => {
  console.log(`${INFO_MESSAGE.WINNER_TITLE}${winners.join(", ")}`);
};
