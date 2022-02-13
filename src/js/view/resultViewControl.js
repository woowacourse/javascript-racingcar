import { racingResultArea } from "../util/elements.js";
import { showRacingResultArea } from "./viewControl.js";

const createPositionArrow = () => {
  const position = document.createElement("div");

  position.setAttribute("class", "position-arrow");
  position.innerHTML = "⬇️️";

  return position;
};

const createResultForCar = car => {
  const nameTag = document.createElement("div");
  nameTag.setAttribute("class", "car-name-tag");
  nameTag.innerHTML = car.name;

  const container = document.createElement("div");
  container.setAttribute("id", `${car.name}-container`);
  container.append(nameTag);
  for (let index = 0; index < car.location; index++) {
    container.append(createPositionArrow());
  }

  return container;
};

const createResultLog = cars => {
  cars.getCars().forEach(car => {
    racingResultArea.append(createResultForCar(car));
  });
};

export const setResultArea = cars => {
  showRacingResultArea();
  createResultLog(cars);
};
