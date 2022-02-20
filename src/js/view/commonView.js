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

export const lockCarNames = whetherLock => {
  carNamesInput.readOnly = whetherLock;
  carNamesSubmitButton.disabled = whetherLock;
};

export const lockRacingCount = whetherLock => {
  racingCountInput.readOnly = whetherLock;
  racingCountSubmitButton.disabled = whetherLock;
};

export const focusElement = element => {
  element.focus();
};

export const makeInitialView = () => {
  toggleHiddenRacingCountArea();
  toggleHiddenResultArea();
  toggleHiddenWinnerAndRestartArea();
  lockCarNames(false);
  lockRacingCount(false);
  focusElement(carNamesInput);
  carNamesInput.value = "";
  racingCountInput.value = "";
  racingResultArea.innerHTML = "";
  racingWinnerText.innerHTML = "";
};
