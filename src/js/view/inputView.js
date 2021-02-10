export const initializeInputView = function () {
  document.querySelector("#car-names-input").value = "";
  document.querySelector("#count-input").value = "";
  document.querySelector("#count-container").style.display = "none";
};

export const displayCountView = function () {
  // 시도 횟수 영역 노출
  document.querySelector("#count-container").style.display = "block";
};
