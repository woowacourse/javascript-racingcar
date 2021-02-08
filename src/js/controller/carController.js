// 자동차와 관련된 검증, 조작 및 뷰?

// 자동차 이름 검증 함수
// 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
const isValidCarNames = function(carNamesInput) {
  return carNamesInput.every(carName => carName.length <= 5);
}

export const handleCarNamesSubmit = function() {
  const carNamesInput = document.querySelector("#car-names-input").value.split(",");
  // 자동차 이름 검증
  if (!isValidCarNames(carNamesInput)) {
    alert('유효한 자동차이름이 아닙니다.');
    return;
  }
  
  // Car 생성
  
};