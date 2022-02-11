import {
  carNamesInput,
  carNamesSubmitButton,
  racingCountArea,
  racingCountInput,
  racingCountSubmitButton,
  racingResultArea,
  racingWinnerArea,
  racingWinnerText,
  restartButton,
} from "../util/elements.js";
import { BLANK } from "../util/constants.js";

export const makeInitialView = () => {
  carNamesInput.value = BLANK;
  carNamesInput.readOnly = false;
  carNamesSubmitButton.disabled = false;
  racingCountArea.hidden = true;
  racingCountInput.value = BLANK;
  racingCountInput.readOnly = false;
  racingCountSubmitButton.disabled = false;
  racingResultArea.innerHTML = BLANK;
  racingResultArea.hidden = true;
  racingWinnerArea.hidden = true;
  racingWinnerText.innerHTML = BLANK;
  restartButton.hidden = true;
};

export const showRacingCountArea = () => {
  racingCountArea.hidden = false;
};

export const showRacingResultArea = () => {
  racingResultArea.hidden = false;
};

export const showWinnerAndRestartButton = () => {
  racingWinnerArea.hidden = false;
  restartButton.hidden = false;
};
