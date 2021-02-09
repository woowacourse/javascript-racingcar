// result 바꾸기 -> racingContent
export const displayRacing = function (cars) {
  // displayCar로 바꾸기
  let result = "";

  cars.forEach((car) => {
    result += `<div>
      <div class="car-player mr-2">${car.name}</div>
    </div>`;
  });

  document.querySelector("#racing-cars").innerHTML = result;
};

export const displayArrow = function (element) {
  element.innerHTML += `<div class="forward-icon mt-2">⬇️️</div>`;
};
