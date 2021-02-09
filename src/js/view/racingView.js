export const displayRacing = function (cars) {
  let result = "";

  cars.forEach((car) => {
    result += `<div>
      <div class="car-player mr-2">${car.name}</div>
    </div>`;
  });

  document.querySelector("#racing-cars").innerHTML = result;
};
