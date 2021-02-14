import {getQuerySelector, setElementDisplay} from '../utils/util.js';
import {
  countSectionTemplate,
  processSectionTemplate,
  resultSectionTemplate,
} from '../layout/template.js';

class RacingCarView {
  renderCount() {
    const $countSection = getQuerySelector('#count');
    setElementDisplay($countSection, 'block');
    $countSection.innerHTML = countSectionTemplate();
  }

  renderProcess(cars) {
    const $processSection = getQuerySelector('#process');
    setElementDisplay($processSection, 'block');
    $processSection.innerHTML = processSectionTemplate(cars);
  }

  renderResult(winners) {
    const $resultSection = getQuerySelector('#result');
    setElementDisplay($resultSection, 'block');
    $resultSection.innerHTML = resultSectionTemplate(winners);
  }

  resetCar() {
    getQuerySelector('#car-input').value = '';
  }

  resetCount() {
    const $countSection = getQuerySelector('#count');
    setElementDisplay($countSection, 'none');
    $countSection.innerHTML = ``;
  }

  resetProcess() {
    const $processSection = getQuerySelector('#process');
    setElementDisplay($processSection, 'none');
    $processSection.innerHTML = ``;
  }

  resetResult() {
    const $resultSection = getQuerySelector('#result');
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
