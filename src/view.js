import {
  $,
  $$,
  generateRandomNumber,
  makeDOMDisplayNone,
  makeDOMDisplayNotNone,
} from './utils/common.js';
import {
  ROUND_DELAY,
  SELECTOR,
  STEP_SIGN,
  WINNER_MESSAGE,
  WINNER_SEPARATOR,
  WIN_ALERT_DELAY,
} from './utils/constants.js';

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

  generateStepSection(car) {
    return `
    <section class="${SELECTOR.STEP_SECTION}">
      <span class="${SELECTOR.STEP_SECTION_NAME}">${car.name}</span>
      <ul class="${SELECTOR.STEP_SECTION_ARROWS}">
        <li class="${SELECTOR.STEP_SECTION_LOADING}"></li>
      </ul>
    </section>
  `;
  }

  generateStepSections(carList) {
    this.$stepSections.innerHTML = carList.map((car) => this.generateStepSection(car)).join('');
  }

  async showResult(carList, winnerList) {
    this.generateStepSections(carList);

    this.$stepSectionArrowsArray = Array.from($$(SELECTOR.STEP_SECTION_ARROWS));

    this.makeResultDisplayNotNone();
    await this.showStepSection(carList);
    this.removeSpinner();
    this.showWinner(winnerList);
    setTimeout(() => {
      this.showWinnerByAlert(winnerList);
    }, WIN_ALERT_DELAY);
  }

  async showStepSection(carList) {
    const count = carList[0].stepByRound.length;
    for (let i = 0; i < count; i++) {
      await this.updateRoundPromise(carList, i);
    }
  }

  updateRound(carList, i) {
    const stepSectionArrowTemplate = `<li class="${SELECTOR.STEP_SECTION_ARROW}">⬇️️</li>`;
    carList.map((car, j) => {
      if (car.stepByRound[i] === STEP_SIGN.GO) {
        this.$stepSectionArrowsArray[j].innerHTML += stepSectionArrowTemplate;
      }
    });
  }

  updateRoundPromise(carList, i) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve();
        this.updateRound(carList, i);
      }, ROUND_DELAY),
    );
  }

  removeSpinner() {
    const $stepSectionLoading = Array.from($$(SELECTOR.STEP_SECTION_LOADING));
    this.$stepSectionArrowsArray.forEach((ul, index) => ul.removeChild($stepSectionLoading[index]));
  }

  showWinner(winnerList) {
    this.$winner.innerText = `🏆 최종 우승자: ${winnerList.join(`${WINNER_SEPARATOR} `)} 🏆`;
  }

  showWinnerByAlert(winnerList) {
    alert(WINNER_MESSAGE(winnerList));
  }
}
