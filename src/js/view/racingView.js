import { selectors } from "../keys.js";
import { $ } from "../utils.js";

export const displayRacingCars = function (cars) {
  const classes = ["car-player", "mr-2"];
  cars.forEach((car) => {
    $(selectors.racingCarsArea).innerHTML += `<div>
      <div class=${classes.join(" ")}>${car.name}</div>
    </div>`;
  });
  $(selectors.racingContainer).style.display = "flex";
};

export const appendArrowElement = function (element) {
  const classes = ["forward-icon", "mt-2"];
  element.innerHTML += `<div class=${classes.join(" ")}>⬇️️</div>`;
};

export const initializeRacingView = function () {
  $(selectors.racingContainer).style.display = "none";
  $(selectors.racingCarsArea).innerHTML = "";
};
