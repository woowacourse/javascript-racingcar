import { $resultArea, $tryCountInput } from '../elements.js';
import { getResultAreaTemplate } from '../templates.js';

export default class RacingCarGameView {
  static updateResultArea(carList) {
    $resultArea.innerHTML = getResultAreaTemplate(carList);
  }

  static clearTryCountInput() {
    $tryCountInput.value = '';
  }
}