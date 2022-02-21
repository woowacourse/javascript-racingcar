import { $, $$ } from "./getElement.js";

const showRacingResult = () => {
  $("racing-result").hidden = false;
};

const createEachResultLogContainer = car => {
  const container = document.createElement("div");
  const carNameTag = document.createElement("div");
  const way = document.createElement("div");

  container.setAttribute("id", `${car.name}-container`);
  carNameTag.setAttribute("class", "car-name-tag");
  carNameTag.innerHTML = car.name;
  way.innerHTML = `<img src="src/images/loading.svg" alt="loading" class="loading" />`;
  way.setAttribute("id", `${car.name}-way`);
  container.append(carNameTag);
  container.append(way);

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
  $(`${car.name}-way`).prepend(createPositionArrow());
};

export const hideLoading = () => {
  const allLoadings = $$("loading");

  for (let i = 0; i < allLoadings.length; i++) {
    allLoadings[i].hidden = true;
  }
};
