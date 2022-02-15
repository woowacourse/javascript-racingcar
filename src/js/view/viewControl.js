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
} from "../elements.js";

export const makeInitialView = () => {
  carNamesInput.value = "";
  carNamesInput.readOnly = false;
  carNamesSubmitButton.disabled = false;
  racingCountArea.hidden = true;
  racingCountInput.value = "";
  racingCountInput.readOnly = false;
  racingCountSubmitButton.disabled = false;
  racingResultArea.innerHTML = "";
  racingResultArea.hidden = true;
  racingWinnerArea.hidden = true;
  racingWinnerText.innerHTML = "";
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
