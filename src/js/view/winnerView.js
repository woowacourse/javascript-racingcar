import { selectors, globalTexts } from "../keys.js";

export const displayWinnerView = function (winners) {
  const $winnerElement = document.querySelector(selectors.winnerTextArea);
  $winnerElement.innerText = globalTexts.makeWinnerText(winners);
  document.querySelector(selectors.winnerContainer).style.display = "flex";
};

export const initializeWinnerView = function () {
  const $winnerElement = document.querySelector(selectors.winnerTextArea);
  document.querySelector(selectors.winnerContainer).style.display = "none";
  $winnerElement.innerText = globalTexts.winnerText;
};
