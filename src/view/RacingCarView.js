import { CONGRATULATION_MESSAGE, DELAY, SELECTOR } from '../constants/index.js';
import { getRacingCarItemTemplate, PROGRESS_TEMPLATE } from './template.js';

class RacingCarView {
  constructor() {
    this.initDOM();
  }

  initDOM() {
    this.$carNamesInput = document.getElementById(SELECTOR.CAR_NAMES_INPUT);
    this.$carNamesButton = document.getElementById(SELECTOR.CAR_NAMES_BUTTON);
    this.$racingCountForm = document.getElementById(SELECTOR.RACING_COUNT_FORM);
    this.$racingCountInput = document.getElementById(SELECTOR.RACING_COUNT_INPUT);
    this.$racingCountButton = document.getElementById(SELECTOR.RACING_COUNT_BUTTON);
    this.$racingCarList = document.getElementById(SELECTOR.RACING_CAR_LIST);
    this.$finalWinner = document.getElementById(SELECTOR.FINAL_WINNER);
    this.$restartSection = document.getElementById(SELECTOR.RESTART_SECTION);
    this.$finalWinnerResult = document.getElementById(SELECTOR.FINAL_WINNER_RESULT);
    this.$racingCarList = document.getElementById(SELECTOR.RACING_CAR_LIST);
    this.$racingCountInputSection = document.getElementById(SELECTOR.RACING_COUNT_INPUT_SECTION);
  }

  showRacingCountForm() {
    this.$racingCountInputSection.removeAttribute('hidden');
  }

  showFinalWinner() {
    this.$finalWinner.removeAttribute('hidden');
  }

  showRestartSection() {
    this.$restartSection.removeAttribute('hidden');
  }

  showCongratulationMessage() {
    setTimeout(() => {
      alert(CONGRATULATION_MESSAGE);
    }, DELAY.RESULT_TIME);
  }

  hideElement() {
    this.$racingCountInputSection.setAttribute('hidden', true);
    this.$finalWinner.setAttribute('hidden', true);
    this.$restartSection.setAttribute('hidden', true);
  }

  hideLoadingSpinner() {
    const racingCarProgressList = [...this.$racingCarProgress];

    racingCarProgressList.forEach((element) => {
      element.lastElementChild.classList.add('loading-hidden');
    });
  }

  resetCarNamesInput() {
    this.$carNamesInput.value = '';
  }

  resetRacingCountInput() {
    this.$racingCountInput.value = '';
  }

  resetElement() {
    this.$carNamesInput.value = '';
    this.$racingCountInput.value = '';
    this.$racingCarList.textContent = '';
    this.$finalWinnerResult.textContent = '';
  }

  renderRacingCarList(carNameList) {
    let initValue = '';

    const racingCarListTemplate = carNameList.reduce(
      (result, carName) => result + getRacingCarItemTemplate(carName),
      initValue
    );

    this.$racingCarList.insertAdjacentHTML('afterbegin', racingCarListTemplate);
  }

  renderRacingCarProgress(movedCarList) {
    this.$racingCarProgress = document.getElementsByClassName(SELECTOR.RACING_CAR_PROGRESS);

    movedCarList.forEach((movedCar) => {
      this.$racingCarProgress[movedCar].insertAdjacentHTML('afterbegin', PROGRESS_TEMPLATE);
    });
  }

  renderFinalWinnerResult(finalWinner) {
    this.$finalWinnerResult.textContent = finalWinner;
  }

  activateCarNamesForm() {
    this.$carNamesInput.disabled = false;
    this.$carNamesButton.disabled = false;
  }

  activateRacingCountForm() {
    this.$racingCountInput.disabled = false;
    this.$racingCountButton.disabled = false;
  }

  deactivateCarNamesForm() {
    this.$carNamesInput.disabled = true;
    this.$carNamesButton.disabled = true;
  }

  deactivateRacingCountForm() {
    this.$racingCountInput.disabled = true;
    this.$racingCountButton.disabled = true;
  }
}

export default RacingCarView;
