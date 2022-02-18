import { $ } from "./getElement.js";

export const initializeView = () => {
  $("car-names-input").value = "";
  $("car-names-input").readOnly = false;
  $("car-names-submit").disabled = false;
  $("racing-count-area").hidden = true;
  $("racing-count-input").value = "";
  $("racing-count-input").readOnly = false;
  $("racing-count-submit").disabled = false;
  $("racing-result").innerHTML = "";
  $("racing-result").hidden = true;
  $("winner-area").hidden = true;
  $("racing-winner").innerHTML = "";
  $("restart-button").hidden = true;
};
