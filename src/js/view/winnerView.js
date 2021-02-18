import { addWinnerElement } from "../controller/winnerController.js";
import { Element } from "../utils/constants.js";
import { $ } from "../utils/querySelector.js";

export const displayWinnerView = function (winners) {
  addWinnerElement(winners);
  $(Element.WINNER_CONTAINER_CLASS).style.display = "flex";
};

export const initializeWinnerView = function () {
  addWinnerElement();
  $(Element.WINNER_CONTAINER_CLASS).style.display = "none";
};
