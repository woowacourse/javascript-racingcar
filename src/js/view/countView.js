import { $ } from "./getElement.js";

export const enableCountForm = () => {
  $("car-names-input").readOnly = true;
  $("car-names-submit").disabled = true;
  $("racing-count-area").hidden = false;
  $("racing-count-input").focus();
};

export const disableCountForm = () => {
  $("racing-count-input").readOnly = true;
  $("racing-count-submit").disabled = true;
};
