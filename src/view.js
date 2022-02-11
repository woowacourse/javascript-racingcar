import { $, makeDOMHidden, makeDOMVisible } from './utils/common.js';

export default class View {
  constructor() {
    this.configureDOM();
    this.makeAllDOMHidden();
    this.makeCountFormHidden();
  }

  configureDOM() {
    this.$nameInput = $('.input-section__name-input');
    this.$countInput = $('.input-section__count-input');
    this.$nameButton = $('.input-section__name-button');
    this.$countButton = $('.input-section__count-button');
    this.$countSubmitContainer = $('#count-submit-container');
    this.$resultSections = $('.result-sections');
    this.$winner = $('#winner');
    this.$resetButton = $('#reset-button');
  }

  makeDOMReset() {
    this.makeAllDOMHidden();
    this.makeCountFormHidden();
    this.clearInput();
  }

  makeAllDOMVisible() {
    makeDOMVisible([this.$winner, this.$resetButton], 'block');
    makeDOMVisible([this.$resultSections], 'flex');
  }

  makeAllDOMHidden() {
    makeDOMHidden([this.$winner, this.$resetButton, this.$resultSections]);
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

  resultUpdate(carList) {
    let template = '';
    carList.forEach((car) => {
      template += this.generateResultSectionDOM(car);
    });
    this.$resultSections.innerHTML = template;
  }

  generateResultSectionDOM(car) {
    return `
    <div class="result-section">
      <span class="result-section__name">${car.name}</span>
      <ul class="result-section__arrows">
        ${'<li class="result-section__arrow">⬇️️</li>'.repeat(car.step)}
      </ul>
    </div>
  `;
  }

  winnerUpdate(winnerList) {
    this.$winner.innerText = `🏆 최종 우승자: ${winnerList.join(', ')} 🏆`;
  }

  showAllResult(carList, winnerList) {
    this.resultUpdate(carList);
    this.winnerUpdate(winnerList);
    this.makeAllDOMVisible();
  }
}
