import { racingWinnerText } from "../elements.js";

export const setWinnerText = winners => {
  racingWinnerText.innerHTML = winners.join(", ");
};
