import {
  $resultArea,
  $tryCountInput,
  $winners,
  $restartButton,
  $carNameInput,
} from '../elements.js';
import { getResultAreaTemplate, getWinnersTemplate } from '../templates.js';

export default class RacingCarGameView {
  static updateResultArea(carList) {
    $resultArea.innerHTML = getResultAreaTemplate(carList);
  }
  
  static showWinners(winners) {
    $winners.innerText = getWinnersTemplate(winners);
  }
  
  static showRestartButton() {
    $restartButton.style.display = '';
  }

  static clearCarNamesInput() {
    $carNameInput.value = '';
  }

  static clearTryCountInput() {
    $tryCountInput.value = '';
  }

  static clearResultArea() {
    $resultArea.innerHTML = '';
  }

  static hideRestartButton() {
    $restartButton.style.display = 'none';
  }

  static hideWinners() {
    $winners.innerText = '';
  }

  static resetGameView() {
    this.clearCarNamesInput();
    this.clearTryCountInput();
    this.clearResultArea();
    this.hideRestartButton();
    this.hideWinners();
  }
}
