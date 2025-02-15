import { INFO_MESSAGE, CAR_PROGRESS_MARK, DELIMITERS } from "../domain/constants.js";

export const displayResultTitle = () => {
  console.log(INFO_MESSAGE.RACE_RESULT_TITLE);
};

export const displayRaceResult = (cars) => {
  for (const c of cars) {
    const result = CAR_PROGRESS_MARK.repeat(c.position);
    console.log(`${c.name} : ${result}`);
  }
  console.log();
};

export const displayWinner = (cars) => {
  const maxPosition = Math.max(...cars.map((car) => car.position));
  const winners = cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);
  console.log(`${INFO_MESSAGE.WINNER_TITLE}${winners.join(DELIMITERS.WINNER)}`);
};
