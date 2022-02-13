import { racingWinnerText } from "../util/elements.js";
import { SEPARATOR } from "../util/constants.js";

export const setWinnerText = winners => {
  racingWinnerText.innerHTML = winners.join(`${SEPARATOR} `);
};
