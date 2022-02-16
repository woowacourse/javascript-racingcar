import { $ } from "./getElement.js";

export const setWinnerText = winners => {
  $("racing-winner").innerHTML = winners.join(", ");
};
