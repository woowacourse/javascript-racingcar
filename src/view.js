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
    makeDOMDisplayNotNone(this.$resultSection, SELECTOR.RESULT_SECTION_DISPLAY_NONE);
  }

  makeResultDisplayNone() {
    makeDOMDisplayNone(this.$resultSection, SELECTOR.RESULT_SECTION_DISPLAY_NONE);
  }

  makeCountFormDisplayNone() {
    makeDOMDisplayNone(this.$countSection, SELECTOR.COUNT_SECTION_DISPLAY_NONE);
  }

  makeCountFormDisplayNotNone() {
    makeDOMDisplayNotNone(this.$countSection, SELECTOR.COUNT_SECTION_DISPLAY_NONE);
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
    this.$stepSections.innerHTML = carList.map((car) => this.generateStepSectionDOM(car)).join('');
    const $stepSectionArrowsArray = Array.from(
      document.querySelectorAll(`.${SELECTOR.STEP_SECTION_ARROWS}`),
    );
    const stepSectionArrowTemplate = `<li class="${SELECTOR.STEP_SECTION_ARROW}">⬇️️</li>`;

    const count = carList[0].stepByRound.length;
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        carList.map((car, j) => {
          if (car.stepByRound[i] === 1) {
            $stepSectionArrowsArray[j].innerHTML += stepSectionArrowTemplate;
          }
        });
        if (i + 1 === count) {
          const $stepSectionLoading = Array.from(
            document.querySelectorAll(`.${SELECTOR.STEP_SECTION_LOADING}`),
          );
          $stepSectionArrowsArray.forEach((ul, index) =>
            ul.removeChild($stepSectionLoading[index]),
          );
        }
      }, 1000 * (i + 1));
    }
  }

  generateStepSectionDOM(car) {
    return `
    <section class="${SELECTOR.STEP_SECTION}">
      <span class="${SELECTOR.STEP_SECTION_NAME}">${car.name}</span>
      <ul class="${SELECTOR.STEP_SECTION_ARROWS}">
        <li class="${SELECTOR.STEP_SECTION_LOADING}"></li>
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
