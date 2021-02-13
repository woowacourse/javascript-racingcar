import { $ } from "../controller/utils.js";

export const displayRacingCars = function (cars) {
  let carPlayersElement = "";

  cars.forEach((car) => {
    carPlayersElement += `<div>
      <div class="car-player mr-2">${car.name}</div>
    </div>`;
  });

  $("#racing-container > section > div").innerHTML = carPlayersElement;

  $("#racing-container").style.display = "flex";
};

export const displayArrow = function (element) {
  element.innerHTML += `<div class="forward-icon mt-2">⬇️️</div>`;
};

export const initializeRacingView = function () {
  $("#racing-container").style.display = "none";
  $("#racing-container > section > div").innerHTML = "";
};
