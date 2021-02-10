export const initializeInputView = function () {
  document.querySelector("#car-names-input").value = "";
  document.querySelector("#count-input").value = "";
  document.querySelector("#count-container").style.display = "none";
};

export const displayCountView = function () {
  document.querySelector("#count-container").style.display = "block";
};
