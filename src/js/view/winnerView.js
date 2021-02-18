import { addWinnerElement } from "../controller/winnerController.js";
import { Element } from "../utils/constants.js";
import { $ } from "../utils/querySelector.js";

export const displayWinnerView = (winners) => {
  addWinnerElement(winners);
  $(Element.WINNER_CONTAINER_CLASS).style.display = "flex";
};

export const initializeWinnerView = () => {
  addWinnerElement();
  $(Element.WINNER_CONTAINER_CLASS).style.display = "none";
};
