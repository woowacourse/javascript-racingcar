import { racingWinnerText } from "../util/elements.js";

export const setWinnerText = winners => {
  racingWinnerText.innerHTML = winners.join(", ");
};
