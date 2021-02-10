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

  // 레이싱 영역 노출
  document.querySelector("#racing-container").style.display = "flex";
};

export const displayArrow = function (element) {
  element.innerHTML += `<div class="forward-icon mt-2">⬇️️</div>`;
};

export const initializeRacingView = function () {
  document.querySelector("#racing-cars").style.display = "none";
  document.querySelector("#racing-cars").innerHTML = "";
};
