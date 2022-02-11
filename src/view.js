import { $, makeDOMHidden, makeDOMVisible } from './utils/common.js';
import { WINNER_SEPARATOR } from './utils/constants.js';

export default class View {
  constructor() {
    this.configureDOM();
    this.makeResultHidden();
    this.makeCountFormHidden();
  }

  configureDOM() {
    this.$nameInput = $('.input-section__name-input');
    this.$countInput = $('.input-section__count-input');
    this.$nameButton = $('.input-section__name-button');
    this.$countButton = $('.input-section__count-button');
    this.$countSubmitContainer = $('#count-submit-container');
    this.$stepSections = $('.step-sections');
    this.$winner = $('#winner');
    this.$resetButton = $('#reset-button');
  }

  makeDOMReset() {
    this.makeResultHidden();
    this.makeCountFormHidden();
    this.clearInput();
  }

  makeResultVisible() {
    makeDOMVisible([this.$winner, this.$resetButton], 'block');
    makeDOMVisible([this.$stepSections], 'flex');
  }

  makeResultHidden() {
    makeDOMHidden([this.$winner, this.$resetButton, this.$stepSections]);
  }

  makeCountFormHidden() {
    makeDOMHidden([this.$countSubmitContainer]);
  }

  makeCountFormVisible() {
    makeDOMVisible([this.$countSubmitContainer], 'block');
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
    <div class="step-section">
      <span class="step-section__name">${car.name}</span>
      <ul class="step-section__arrows">
        ${'<li class="step-section__arrow">⬇️️</li>'.repeat(car.step)}
      </ul>
    </div>
  `;
  }

  winnerUpdate(winnerList) {
    this.$winner.innerText = `🏆 최종 우승자: ${winnerList.join(`${WINNER_SEPARATOR} `)} 🏆`;
  }

  showResult(carList, winnerList) {
    this.stepUpdate(carList);
    this.winnerUpdate(winnerList);
    this.makeResultVisible();
  }
}
