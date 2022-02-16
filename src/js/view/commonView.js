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

export const toggleHiddenRacingCountArea = () => {
  racingCountArea.classList.toggle("hidden");
};

export const toggleHiddenResultArea = () => {
  racingResultArea.classList.toggle("hidden");
};

export const toggleHiddenWinnerAndRestartArea = () => {
  racingWinnerArea.classList.toggle("hidden");
  restartButton.classList.toggle("hidden");
};

export const makeInitialView = () => {
  toggleHiddenRacingCountArea();
  toggleHiddenResultArea();
  toggleHiddenWinnerAndRestartArea();
  carNamesInput.value = "";
  carNamesInput.readOnly = false;
  carNamesSubmitButton.disabled = false;
  racingCountInput.value = "";
  racingCountInput.readOnly = false;
  racingCountSubmitButton.disabled = false;
  racingResultArea.innerHTML = "";
  racingWinnerText.innerHTML = "";
};

export const lockCarNames = () => {
  carNamesInput.readOnly = true;
  carNamesSubmitButton.disabled = true;
};

export const lockRacingCount = () => {
  racingCountInput.readOnly = true;
  racingCountSubmitButton.disabled = true;
};
