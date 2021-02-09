import { app } from "../index.js";
import Car from "../model/Car.js";
import { displayRacing } from "../view/racingView.js";

// 자동차와 관련된 검증, 조작 및 뷰?

// 자동차 이름 검증 함수

// 공백 이름 검증 함수
// 리팩토링 할 때 수정 (함수 표현 방식)
// refactoring - 형식, utils
function isAlphanumeric(input) {
  return /^[a-zA-Z0-9]+$/.test(input);
}

// refactoring - 형식, utils
function isNotDuplicatedArray(array) {
  return Array.from(new Set(array)).length === array.length;
}

// 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
const isValidCarNames = function (carNamesInput) {
  return (
    isNotDuplicatedArray(carNamesInput) &&
    carNamesInput.every(
      (carName) =>
        1 <= carName.length && carName.length <= 5 && isAlphanumeric(carName)
    )
  );
};

const isValidCount = function (value) {
  return Number(value) >= 1;
};

export const handleCarNamesSubmit = function () {
  const carNamesInput = document
    .querySelector("#car-names-input")
    .value.split(",");
  // 자동차 이름 검증
  if (!isValidCarNames(carNamesInput)) {
    alert("유효한 자동차이름이 아닙니다.");
    return;
  }
  // 시도 횟수 영역 노출
  document.querySelector("#count-container").style.display = "block";
};

export const handleCountSubmit = function () {
  const carNames = document.querySelector("#car-names-input").value.split(",");
  const countInput = document.querySelector("#count-input").value;

  if (!isValidCount(countInput)) {
    alert("시도할 횟수는 1이상이어야 합니다.");
    return;
  }

  // 자동차 객체 생성
  carNames.forEach((carName) => {
    app.cars.push(new Car(carName));
  });

  // 0-9 랜덤 숫자 계산해서 자동차 움직이도록

  // display~
  displayRacing(app.cars);

  // 레이싱 영역 노출
  document.querySelector("#racing-container").style.display = "flex";
};
