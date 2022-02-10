import { racingResultArea } from "../util/elements.js";

export const setResultArea = cars => {
  showRacingResultArea();
  createResultLog(cars);
};

const showRacingResultArea = () => {
  racingResultArea.hidden = false;
};

const createResultLog = cars => {
  cars.cars.forEach(car => {
    racingResultArea.append(createResultForCar(car));
  });
};

const createResultForCar = car => {
  const container = document.createElement("div");
  const nameTag = document.createElement("div");

  nameTag.setAttribute("class", "car-name-tag");
  nameTag.innerHTML = car.name;

  container.append(nameTag);
  for (let index = 0; index < car.location; index++) {
    container.append(createPositionArrow());
  }

  return container;
};

const createPositionArrow = () => {
  const position = document.createElement("div");

  position.setAttribute("class", "position-arrow");
  position.innerHTML = "⬇️️";

  return position;
};
