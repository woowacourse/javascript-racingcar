import { Element } from "../utils/constants.js";
import { $ } from "../utils/querySelector.js";

export const initializeInputView = () => {
  $(Element.CAR_NAMES_INPUT_CLASS).value = "";
  $(Element.COUNT_INPUT_CLASS).value = "";
  $(Element.COUNT_CONTAINER_CLASS).style.display = "none";
};

export const displayCountView = () => {
  $(Element.COUNT_CONTAINER_CLASS).style.display = "block";
};
