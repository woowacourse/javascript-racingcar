import { $, makeDOMDisplayNone, makeDOMDisplayNotNone } from './utils/common.js';
import { SELECTOR, WINNER_SEPARATOR } from './utils/constants.js';

export default class View {
  constructor() {
    this.configureDOM();
    this.makeResultDisplayNone();
    this.makeCountFormDisplayNone();
  }

  configureDOM() {
    this.$nameInput = $(SELECTOR.INPUT_SECTION_NAME_INPUT);
    this.$countInput = $(SELECTOR.INPUT_SECTION_COUNT_INPUT);
    this.$nameButton = $(SELECTOR.INPUT_SECTION_NAME_BUTTON);
    this.$countButton = $(SELECTOR.INPUT_SECTION_COUNT_BUTTON);
    this.$countSection = $(SELECTOR.COUNT_SECTION);
    this.$resultSection = $(SELECTOR.RESULT_SECTION);
    this.$stepSections = $(SELECTOR.STEP_SECTIONS);
    this.$winner = $(SELECTOR.WINNER);
    this.$resetButton = $(SELECTOR.RESET_BUTTON);
  }

  makeDOMReset() {
    this.makeResultDisplayNone();
    this.makeCountFormDisplayNone();
    this.clearInput();
  }

  makeResultDisplayNotNone() {
    makeDOMDisplayNotNone(this.$resultSection, 'result-section-display-none');
  }

  makeResultDisplayNone() {
    makeDOMDisplayNone(this.$resultSection, 'result-section-display-none');
  }

  makeCountFormDisplayNone() {
    makeDOMDisplayNone(this.$countSection, 'count-section-display-none');
  }

  makeCountFormDisplayNotNone() {
    makeDOMDisplayNotNone(this.$countSection, 'count-section-display-none');
  }

  setOnSubmitName(fn) {
    this.$nameButton.addEventListener('click', (event) => {
      event.preventDefault();
      fn(this.$nameInput.value);
    });
  }

  setOnSubmitCount(fn) {
    this.$countButton.addEventListener('click', (event) => {
      event.preventDefault();
      fn(Number(this.$countInput.value));
    });
  }

  setOnClickReset(fn) {
    this.$resetButton.addEventListener('click', () => {
      this.makeDOMReset();
      fn();
    });
  }

  clearInput() {
    this.$nameInput.value = '';
    this.$countInput.value = '';
  }

  stepUpdate(carList) {
    let template = '';
    carList.forEach((car) => {
      template += this.generateStepSectionDOM(car);
    });
    this.$stepSections.innerHTML = template;
  }

  generateStepSectionDOM(car) {
    return `
    <section class="step-section">
      <span class="step-section__name">${car.name}</span>
      <ul class="step-section__arrows">
        ${'<li class="step-section__arrow">⬇️️</li>'.repeat(car.step)}
      </ul>
    </section>
  `;
  }

  winnerUpdate(winnerList) {
    this.$winner.innerText = `🏆 최종 우승자: ${winnerList.join(`${WINNER_SEPARATOR} `)} 🏆`;
  }

  showResult(carList, winnerList) {
    this.stepUpdate(carList);
    this.winnerUpdate(winnerList);
    this.makeResultDisplayNotNone();
  }
}
