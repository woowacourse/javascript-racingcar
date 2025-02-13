import { INFO_MESSAGE } from "./constants.js";

export const displayResultTitle = () => {
  console.log(INFO_MESSAGE.RACE_RESULT_TITLE);
};

export const displayRaceResult = (cars) => {
  for (const c of cars) {
    console.log(`${c.name} : ${c.position}`);
  }
  console.log();
};

export const displayWinner = (cars) => {
  const maxPosition = Math.max(...cars.map((car) => car.position.length));
  const winners = cars
    .filter((car) => car.position.length === maxPosition)
    .map((car) => car.name);
  console.log(`${INFO_MESSAGE.WINNER_TITLE}${winners.join(", ")}`);
};
