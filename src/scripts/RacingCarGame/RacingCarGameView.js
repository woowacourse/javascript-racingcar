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
  updateResultArea(carList) {
    $resultArea.innerHTML = getResultAreaTemplate(carList);
  }

  changeInnerText($target, text) {
    $target.innerText = text;
  }

  showWinners(winners) {
    $winners.innerText = getWinnersTemplate(winners);
  }

  deactivateCarNameSubmitButton() {
    $carNameSubmit.disabled = "disabled";
  }

  activateCarNameSubmitButton() {
    $carNameSubmit.disabled = false;
  }

  deactivatePlayGameButton() {
    $playGameButton.disabled = "disabled";
  }

  activatePlayGameButton() {
    $playGameButton.disabled = false;
  }

  deactivateRestartButton() {
    $restartButton.disabled = "disabled";
  }

  activateRestartButton() {
    $restartButton.disabled = false;
  }

  clearCarNamesInput() {
    $carNameInput.value = "";
  }

  clearTryCountInput() {
    $tryCountInput.value = "";
  }

  clearResultArea() {
    $resultArea.innerHTML = "";
  }

  showRestartButton() {
    $restartButton.style.display = "";
  }

  hideRestartButton() {
    $restartButton.style.display = "none";
  }

  hideWinners() {
    $winners.innerText = "";
  }

  resetGameView() {
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
