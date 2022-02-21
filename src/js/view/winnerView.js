import { racingWinnerText, spinner } from "../util/elements.js";

const removeSpinner = () => {
  while (spinner.length > 0) {
    spinner.item(0).remove();
  }
};

export const setWinnerText = winners => {
  removeSpinner();
  racingWinnerText.innerText = winners.join(", ");
};
