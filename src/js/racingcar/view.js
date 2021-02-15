import {$, $$, setElementDisplay} from '../utils/dom.js';
import {
  countSectionTemplate,
  processSectionTemplate,
  resultSectionTemplate,
} from '../layout/template.js';

class RacingCarView {
  renderCount() {
    const $countSection = $('#count');
    setElementDisplay($countSection, 'block');
    $countSection.innerHTML = countSectionTemplate();
  }

  renderProcess(cars) {
    const $processSection = $('#process');
    setElementDisplay($processSection, 'block');
    $processSection.innerHTML = processSectionTemplate(cars);
  }

  renderResult(winners) {
    const $resultSection = $('#result');
    setElementDisplay($resultSection, 'block');
    $resultSection.innerHTML = resultSectionTemplate(winners);
  }

  hideSpinnerAll() {
    $$('.spinner-container').forEach(($spinner) => {
      setElementDisplay($spinner, 'none');
    });
  }

  resetCar() {
    $('#car-input').value = '';
  }

  resetCount() {
    const $countSection = $('#count');
    setElementDisplay($countSection, 'none');
    $countSection.innerHTML = ``;
  }

  resetProcess() {
    const $processSection = $('#process');
    setElementDisplay($processSection, 'none');
    $processSection.innerHTML = ``;
  }

  resetResult() {
    const $resultSection = $('#result');
    setElementDisplay($resultSection, 'none');
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
