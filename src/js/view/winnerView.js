import { selectors, globalTexts } from "../keys.js";
import { $ } from "../utils.js";

export const displayWinnerView = function (winners) {
  const $winnerElement = $(selectors.winnerTextArea);
  $winnerElement.innerText = globalTexts.makeWinnerText(winners);
  $(selectors.winnerContainer).style.display = "flex";
};

export const initializeWinnerView = function () {
  const $winnerElement = $(selectors.winnerTextArea);
  $(selectors.winnerContainer).style.display = "none";
  $winnerElement.innerText = globalTexts.winnerText;
};
