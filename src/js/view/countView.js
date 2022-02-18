import { $ } from "./getElement.js";

export const enableCountInputForm = () => {
  $("car-names-input").readOnly = true;
  $("car-names-submit").disabled = true;
  $("racing-count-area").hidden = false;
};

export const disableCountInputForm = () => {
  $("racing-count-input").readOnly = true;
  $("racing-count-submit").disabled = true;
};
