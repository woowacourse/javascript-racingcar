import { racingWinnerText } from "../elements.js";
import { SEPARATOR } from "../constants.js";

export const setWinnerText = winners => {
  racingWinnerText.innerHTML = winners.join(`${SEPARATOR} `);
};
