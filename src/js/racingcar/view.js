import {
  countSectionTemplate,
  processSectionTemplate,
  resultSectionTemplate,
} from '../constants/template.js';

class RacingCarView {
  renderCount() {
    const $countSection = document.querySelector('#count');
    $countSection.style.display = 'block';
    $countSection.innerHTML = countSectionTemplate();
  }

  renderProcess(cars) {
    const $processSection = document.querySelector('#process');
    $processSection.style.display = 'block';
    $processSection.innerHTML = processSectionTemplate(cars);
  }

  renderResult(winners) {
    const $resultSection = document.querySelector('#result');
    $resultSection.style.display = 'block';
    $resultSection.innerHTML = resultSectionTemplate(winners);
  }

  resetCar() {
    const $carInputSection = document.querySelector('#car-input');
    $carInputSection.value = '';
  }

  resetCount() {
    const $countSection = document.querySelector('#count');
    $countSection.style.display = 'none';
    $countSection.innerHTML = ``;
  }

  resetProcess() {
    const $processSection = document.querySelector('#process');
    $processSection.style.display = 'none';

    $processSection.innerHTML = ``;
  }

  resetResult() {
    const $resultSection = document.querySelector('#result');
    $resultSection.style.display = 'none';
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
