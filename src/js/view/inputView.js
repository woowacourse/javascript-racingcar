import { selectors } from "../keys.js";
import { $ } from "../utils.js";

export const initializeInputView = function () {
  $(selectors.carNamesInput).value = "";
  $(selectors.countInput).value = "";
  $(selectors.countContainer).style.display = "none";
};

export const displayCountView = function () {
  $(selectors.countContainer).style.display = "block";
};

export const toggleCarNameInputDisable = function () {
  $(selectors.carNamesInput).toggleAttribute("disabled");
  $(selectors.carNamesSubmit).toggleAttribute("disabled");
};

export const toggleCountInputDisable = function () {
  $(selectors.countInput).toggleAttribute("disabled");
  $(selectors.countSubmit).toggleAttribute("disabled");
};
