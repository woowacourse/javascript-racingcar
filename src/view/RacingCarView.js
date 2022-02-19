import { CONGRATS_MESSAGE, DELAY, SELECTOR } from '../constants/index.js';
import { PROGRESS_TEMPLATE } from '../template/index.js';

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
    this.$racingCountInputSection.classList.add('visible');
  }

  showFinalWinner() {
    this.$finalWinner.classList.add('visible');
  }

  showRestartSection() {
    this.$restartSection.classList.add('visible');
  }

  showCongratsMessage() {
    setTimeout(() => {
      alert(CONGRATS_MESSAGE);
    }, DELAY.RESULT_TIME);
  }

  hideElement() {
    this.$racingCountInputSection.classList.remove('visible');
    this.$finalWinner.classList.remove('visible');
    this.$restartSection.classList.remove('visible');
  }

  hideLoadingSpinner() {
    const racingCarProgressList = [...this.$racingCarProgress];

    racingCarProgressList.forEach((element) => {
      element.lastElementChild.classList.add('hidden');
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

  renderRacingCarList(template) {
    this.$racingCarList.insertAdjacentHTML('afterbegin', template);
  }

  renderRacingCarProgress(index) {
    this.$racingCarProgress = document.getElementsByClassName(SELECTOR.RACING_CAR_PROGRESS);
    this.$racingCarProgress[index].insertAdjacentHTML('afterbegin', PROGRESS_TEMPLATE);
  }

  renderFinalWinnerResult(finalWinner) {
    this.$finalWinnerResult.textContent = finalWinner;
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
