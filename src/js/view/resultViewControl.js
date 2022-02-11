import { racingResultArea } from "../util/elements.js";
import { showRacingResultArea } from "./viewControl.js";
import { ATTRIBUTE, ELEMENT, ARROW } from "../util/constants.js";

export const setResultArea = cars => {
  showRacingResultArea();
  createResultLog(cars);
};

const createResultLog = cars => {
  cars.cars.forEach(car => {
    racingResultArea.append(createResultForCar(car));
  });
};

const createResultForCar = car => {
  const container = document.createElement(ELEMENT.DIV);
  const nameTag = document.createElement(ELEMENT.DIV);

  nameTag.setAttribute(ATTRIBUTE.CLASS, "car-name-tag");
  nameTag.innerHTML = car.name;

  container.setAttribute(ATTRIBUTE.ID, `${car.name}-container`);
  container.append(nameTag);
  for (let index = 0; index < car.location; index++) {
    container.append(createPositionArrow());
  }

  return container;
};

const createPositionArrow = () => {
  const position = document.createElement(ELEMENT.DIV);

  position.setAttribute(ATTRIBUTE.CLASS, "position-arrow");
  position.innerHTML = ARROW;

  return position;
};
