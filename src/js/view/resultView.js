import { racingResultArea } from "../util/elements.js";
import { toggleHiddenResultArea } from "./commonView.js";

const createPositionArrow = () => {
  const position = document.createElement("div");

  position.classList.add("position-arrow");
  position.innerHTML = "⬇️️";

  return position;
};

const createSpinner = () => {
  const spinner = document.createElement("div");

  spinner.classList.add("spinner");

  return spinner;
};

const createResultForCar = car => {
  const nameTag = document.createElement("div");
  nameTag.classList.add("car-name-tag");
  nameTag.innerHTML = car.name;

  const container = document.createElement("div");
  container.classList.add(`${car.name}-container`);
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
  toggleHiddenResultArea();
  initResultLog();
  createResultLog(cars);
};
