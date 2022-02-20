import { $, $$, displayNoneDOM, displayDOM } from './utils/common.js';
import { SELECTOR, NUMBER, CLASS_NAME } from './utils/constants.js';

export default class View {
  constructor() {
    this.configureDOM();
    this.displayNoneResult();
    this.displayNoneCountForm();
  }

  configureDOM() {
    this.$nameInput = $(SELECTOR.NAME_INPUT);
    this.$countInput = $(SELECTOR.COUNT_INPUT);
    this.$nameButton = $(SELECTOR.NAME_BUTTON);
    this.$countButton = $(SELECTOR.COUNT_BUTTON);
    this.$countSubmitContainer = $(SELECTOR.COUNT_SUBMIT_CONTAINER);
    this.$stepSections = $(SELECTOR.STEP_SECTIONS);
    this.$winner = $(SELECTOR.WINNER);
    this.$resetButton = $(SELECTOR.RESET_BUTTON);
  }

  makeDOMReset() {
    this.displayNoneResult();
    this.displayNoneCountForm();
    this.clearInput();
  }

  displayWinnerAndResetButton() {
    displayDOM([this.$winner, this.$resetButton]);
  }

  displayStepSection() {
    displayDOM([this.$stepSections]);
  }

  displayNoneResult() {
    displayNoneDOM([this.$winner, this.$resetButton, this.$stepSections]);
  }

  displayNoneCountForm() {
    displayNoneDOM([this.$countSubmitContainer]);
  }

  displayCountForm() {
    displayDOM([this.$countSubmitContainer]);
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
  }

  generateStepSectionDOM(car) {
    return `
    <div class="step-section">
      <span class="step-section__name">${car.name}</span>
      <ul class="step-section__arrows">
        ${'<li class="step-section__arrow display-none"></li>'.repeat(car.step)}
      </ul>
    </div>
  `;
  }

  winnerUpdate(winnerList) {
    this.$winner.innerText = `🏆 최종 우승자: ${winnerList.join(', ')} 🏆`;
  }

  updateResultDOM(carList, winnerList) {
    this.stepUpdate(carList);
    this.winnerUpdate(winnerList);
  }

  showArrowOneRace() {
    const arrowsList = [...$$(SELECTOR.STEP_SECTION_ARROWS)].map((section) => section.children);
    arrowsList.forEach((arrows) => this.findDisplayNoneArrow([...arrows]));
  }

  findDisplayNoneArrow(arrows) {
    arrows.find((arrow) => this.showEachArrow(arrow));
  }

  showEachArrow(arrow) {
    if (arrow.classList.contains(CLASS_NAME.DISPLAY_NONE)) {
      displayDOM([arrow]);
      this.animateSpinningAndShowArrow(arrow);
      return true;
    }
  }

  animateSpinningAndShowArrow(arrow) {
    const startTime = new Date().getTime();
    let angle = 0;
    arrow.classList.add(CLASS_NAME.SPINNING_BACKGROUND);
    const callback = () => {
      const currentTime = new Date().getTime();
      if (currentTime - NUMBER.ARROW_INTERVAL_TIME > startTime) {
        arrow.style.transform = `rotate( 0deg )`;
        arrow.classList.remove(CLASS_NAME.SPINNING_BACKGROUND);
        arrow.innerText = '⬇️';
        return;
      }
      angle += 10;
      arrow.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(callback);
    };
    requestAnimationFrame(callback);
  }
}
