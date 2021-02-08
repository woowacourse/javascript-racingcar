/*
외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
가능하면 const로만 변수를 선언한다.
동등연산자는 '===' 로만 사용한다.
전역변수를 지양한다.
한 함수나 메서드는 한 가지 기능만 하도록 한다.
*/

import { app } from "../index.js";
import Car from "../model/Car.js";

// 자동차와 관련된 검증, 조작 및 뷰?

// 자동차 이름 검증 함수

// 공백 이름 검증 함수
// 리팩토링 할 때 수정 (함수 표현 방식)
function isAlphanumeric(input) {
  return /^[a-zA-Z0-9]+$/.test(input);
}

function isNotDuplicatedArray(array){
  return Array.from(new Set(array)).length === array.length;
}

// 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
const isValidCarNames = function(carNamesInput) {
  return isNotDuplicatedArray(carNamesInput) && carNamesInput.every(
    (carName) =>
      1 <= carName.length && carName.length <= 5 && isAlphanumeric(carName)
  );
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
  // for testing
  document.querySelector("#racing-container").style.visibility = "visible";
  document.querySelector("#winner-container").style.visibility = "visible";
  
  // Car 생성
  carNamesInput.forEach( (carName) => {
    app.cars.push(new Car(carName));
  })

  console.log(app.cars);
};
