import { $ } from "./getElement.js";

const showRacingResult = () => {
  $("racing-result").hidden = false;
};

const createEachResultLogContainer = car => {
  const container = document.createElement("div");
  const carNameTag = document.createElement("div");

  container.setAttribute("id", `${car.name}-container`);
  carNameTag.setAttribute("class", "car-name-tag");
  carNameTag.innerHTML = car.name;
  container.append(carNameTag);

  return container;
};

const appendEachResultLogContainer = carManager => {
  carManager.cars.forEach(car => {
    $("racing-result").append(createEachResultLogContainer(car));
  });
};

export const initializeRacingResultView = carManager => {
  showRacingResult();
  appendEachResultLogContainer(carManager);
};

const createPositionArrow = () => {
  const position = document.createElement("div");

  position.setAttribute("class", "position-arrow");
  position.innerHTML = "⬇️️";

  return position;
};

export const createEachLog = car => {
  $(`${car.name}-container`).append(createPositionArrow());
};
