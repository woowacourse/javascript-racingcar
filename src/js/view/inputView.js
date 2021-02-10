import { selectors } from "../keys.js";

export const initializeInputView = function () {
  document.querySelector(selectors.carNamesInput).value = "";
  document.querySelector(selectors.countInput).value = "";
  document.querySelector(selectors.countContainer).style.display = "none";
};

export const displayCountView = function () {
  document.querySelector(selectors.countContainer).style.display = "block";
};

export const toggleCarNameInputDisable = function () {
  document.querySelector(selectors.carNamesInput).toggleAttribute("disabled");
  document.querySelector(selectors.carNamesSubmit).toggleAttribute("disabled");
};

export const toggleCountInputDisable = function () {
  document.querySelector(selectors.countInput).toggleAttribute("disabled");
  document.querySelector(selectors.countSubmit).toggleAttribute("disabled");
};
