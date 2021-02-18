import { Element } from "../utils/constants.js";
import { $ } from "../utils/querySelector.js";

export const displayRacingCars = function (cars) {
  let carPlayersElement = "";

  cars.forEach((car) => {
    carPlayersElement += `<div>
      <div class="car-player mr-2">${car.name}</div>
    </div>`;
  });

  $("#racing-container > section > div").innerHTML = carPlayersElement;
  $(Element.RACING_CONTAINER_CLASS).style.display = "flex";
};

export const initializeRacingView = function () {
  $(Element.RACING_CONTAINER_CLASS).style.display = "none";
  $("#racing-container > section > div").innerHTML = "";
};
