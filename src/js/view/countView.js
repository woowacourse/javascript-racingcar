import { $ } from "./getElement.js";

export const enableCountInputForm = () => {
  $("car-names-input").readOnly = true;
  $("car-names-submit").disabled = true;
  $("racing-count-area").hidden = false;
  $("racing-count-input").focus();
};

export const disableCountInputForm = () => {
  $("racing-count-input").readOnly = true;
  $("racing-count-submit").disabled = true;
};
