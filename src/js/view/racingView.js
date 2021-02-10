import { selectors } from "../keys.js";

export const displayRacingCars = function (cars) {
  const classes = ["car-player", "mr-2"];
  cars.forEach((car) => {
    document.querySelector(selectors.racingCarsArea).innerHTML += `<div>
      <div class=${classes.join(" ")}>${car.name}</div>
    </div>`;
  });
  document.querySelector(selectors.racingContainer).style.display = "flex";
};

export const appendArrowElement = function (element) {
  const classes = ["forward-icon", "mt-2"];
  element.innerHTML += `<div class=${classes.join(" ")}>⬇️️</div>`;
};

export const initializeRacingView = function () {
  document.querySelector(selectors.racingContainer).style.display = "none";
  document.querySelector(selectors.racingCarsArea).innerHTML = "";
};
