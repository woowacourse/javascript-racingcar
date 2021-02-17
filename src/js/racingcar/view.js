import {$} from '../utils/dom.js';
import {
  countSectionTemplate,
  processSectionTemplate,
  resultSectionTemplate,
} from '../layout/template.js';

class RacingCarView {
  renderCount() {
    const $countSection = $('#count');
    $countSection.show();
    $countSection.innerHTML = countSectionTemplate();
  }

  renderProcess(cars) {
    const $processSection = $('#process');
    $processSection.show();
    $processSection.innerHTML = processSectionTemplate(cars);
  }

  renderResult(winners) {
    const $resultSection = $('#result');
    $resultSection.show();
    $resultSection.innerHTML = resultSectionTemplate(winners);
  }

  hideSpinnerAll() {
    $('.spinner-container', true).hide();
  }

  showMessage(message) {
    alert(message);
  }

  resetCar() {
    $('#car-input').value = '';
  }

  resetCount() {
    const $countSection = $('#count');
    $countSection.hide();
    $countSection.innerHTML = ``;
  }

  resetProcess() {
    const $processSection = $('#process');
    $processSection.hide();
    $processSection.innerHTML = ``;
  }

  resetResult() {
    const $resultSection = $('#result');
    $resultSection.hide();
    $resultSection.innerHTML = ``;
  }

  reset() {
    this.resetCar();
    this.resetCount();
    this.resetProcess();
    this.resetResult();
  }
}

export default RacingCarView;
