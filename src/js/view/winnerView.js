import { addWinnerElement } from "../controller/winnerController.js";
import { $ } from "../utils/querySelector.js";

export const displayWinnerView = function (winners) {
  addWinnerElement(winners);
  $("#winner-container").style.display = "flex";
};

export const initializeWinnerView = function () {
  addWinnerElement();
  $("#winner-container").style.display = "none";
};
