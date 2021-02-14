import { $ } from "../controller/utils.js";

export const initializeInputView = function () {
  $("#car-names-input").value = "";
  $("#count-input").value = "";
  $("#count-container").style.display = "none";
};

export const displayCountView = function () {
  $("#count-container").style.display = "block";
};
