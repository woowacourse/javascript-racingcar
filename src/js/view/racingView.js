export const displayRacingCars = function (cars) {
  let carPlayersElement = "";

  cars.forEach((car) => {
    carPlayersElement += `<div>
      <div class="car-player mr-2">${car.name}</div>
    </div>`;
  });

  document.querySelector(
    "#racing-container > section > div"
  ).innerHTML = carPlayersElement;

  document.querySelector("#racing-container").style.display = "flex";
};

export const displayArrow = function (element) {
  element.innerHTML += `<div class="forward-icon mt-2">⬇️️</div>`;
};

export const initializeRacingView = function () {
  document.querySelector("#racing-container").style.display = "none";
  document.querySelector("#racing-container > section > div").innerHTML = "";
};
