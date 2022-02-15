import { racingResultArea } from "../util/elements.js";
import { showRacingResultArea } from "./viewControl.js";

const createPositionArrow = () => {
  const position = document.createElement("div");

  position.setAttribute("class", "position-arrow");
  position.innerHTML = "⬇️️";

  return position;
};

const createSpinner = () => {
  const spinner = document.createElement("div");
  spinner.setAttribute("class", "spinner");

  return spinner;
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
  container.append(createSpinner());

  return container;
};

const createResultLog = cars => {
  cars.forEach(car => {
    racingResultArea.append(createResultForCar(car));
  });
};

const initResultLog = () => {
  racingResultArea.innerHTML = "";
};

export const setResultArea = cars => {
  showRacingResultArea();
  initResultLog();
  createResultLog(cars);
};
