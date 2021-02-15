import {
  $resultArea,
  $tryCountInput,
  $winners,
  $restartButton,
  $carNameInput,
} from '../elements.js';
import { getResultAreaTemplate, getWinnersTemplate } from '../templates.js';

export default {
  updateResultArea(carList) {
    $resultArea.innerHTML = getResultAreaTemplate(carList);
  },

  clearCarNamesInput() {
    $carNameInput.value = '';
  },

  clearTryCountInput() {
    $tryCountInput.value = '';
  },

  showWinners(winners) {
    $winners.innerText = getWinnersTemplate(winners);
  },

  showRestartButton() {
    $restartButton.style.display = '';
  },

  hideRestartButton() {
    $restartButton.style.display = 'none';
  },

  hideWinners() {
    $winners.innerText = '';
  },
};
