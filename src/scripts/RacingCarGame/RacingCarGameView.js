import { getResultAreaTemplate, getWinnersTemplate } from "../templates.js";
import {
  $carNameInput,
  $tryCountInput,
  $carNameSubmit,
  $playGameButton,
  $resultArea,
  $winners,
  $restartButton,
} from "../elements.js";

export default class RacingCarGameView {
  static updateResultArea(carList) {
    $resultArea.innerHTML = getResultAreaTemplate(carList);
  }

  static changeInnerText($target, text) {
    $target.innerText = text;
  }

  static showWinners(winners) {
    $winners.innerText = getWinnersTemplate(winners);
  }

  static deactivateCarNameSubmitButton() {
    $carNameSubmit.disabled = "disabled";
  }

  static activateCarNameSubmitButton() {
    $carNameSubmit.disabled = false;
  }

  static deactivatePlayGameButton() {
    $playGameButton.disabled = "disabled";
  }

  static activatePlayGameButton() {
    $playGameButton.disabled = false;
  }

  static showRestartButton() {
    $restartButton.style.display = "";
  }

  static clearCarNamesInput() {
    $carNameInput.value = "";
  }

  static clearTryCountInput() {
    $tryCountInput.value = "";
  }

  static clearResultArea() {
    $resultArea.innerHTML = "";
  }

  static hideRestartButton() {
    $restartButton.style.display = "none";
  }

  static hideWinners() {
    $winners.innerText = "";
  }

  static resetGameView() {
    this.clearCarNamesInput();
    this.clearTryCountInput();
    this.changeInnerText($carNameSubmit, "등록");
    this.activateCarNameSubmitButton();
    this.activatePlayGameButton();
    this.clearResultArea();
    this.hideRestartButton();
    this.hideWinners();
  }
}
