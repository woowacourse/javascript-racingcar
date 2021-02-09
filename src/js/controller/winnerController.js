import { app } from "../index.js";
import { displayWinners } from "../view/winnerView.js";

export const chooseWinners = function () {
  const maxPosition = Math.max(...app.cars.map((car) => car.position));
  const winners = app.cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);

  displayWinners(winners);
};
