import { $ } from './utils/common.js';

export default class View {
  constructor() {
    this.configureDOM();
  }

  configureDOM() {
    this.$nameInput = $('.input-section__name-input');
    this.$countInput = $('.input-section__count-input');
    this.$nameButton = $('.input-section__name-button');
    this.$countButton = $('.input-section__count-button');
    this.$resultSections = $('.result-sections');
    this.$winner = $('#winner');
    this.$resetButton = $('#reset-button');
  }

  setOnSubmitName(fn) {
    this.$nameButton.addEventListener('click', (event) => {
      event.preventDefault();
      const carNames = this.$nameInput.value;
      fn(carNames);
    });
  }

  setOnSubmitCount(fn) {
    this.$countButton.addEventListener('click', (event) => {
      event.preventDefault();
      const count = this.$countInput.value;
      fn(count);
    });
  }

  resultUpdate(carList) {
    let template = '';
    carList.forEach((car) => {
      const eachResult = `
        <div class="result-section">
          <span class="result-section__name">${car.name}</span>
          <ul class="result-section__arrows">
            ${'<li class="result-section__arrow">⬇️️</li>'.repeat(car.step)}
          </ul>
        </div>
      `;
      template += eachResult;
    });
    this.$resultSections.innerHTML = template;
  }
}
