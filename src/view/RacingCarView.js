import { CONGRATS_MESSAGE, DELAY, SELECTOR } from '../constants/index.js';
import { PROGRESS_TEMPLATE } from '../template/index.js';

class RacingCarView {
  constructor() {
    this.initDOM();
  }

  initDOM() {
    this.$carNamesInput = document.getElementById(SELECTOR.CAR_NAMES_INPUT);
    this.$racingCountForm = document.getElementById(SELECTOR.RACING_COUNT_FORM);
    this.$racingCountInput = document.getElementById(SELECTOR.RACING_COUNT_INPUT);
    this.$racingCarList = document.getElementById(SELECTOR.RACING_CAR_LIST);
    this.$finalWinner = document.getElementById(SELECTOR.FINAL_WINNER);
    this.$restartSection = document.getElementById(SELECTOR.RESTART_SECTION);
    this.$finalWinnerResult = document.getElementById(SELECTOR.FINAL_WINNER_RESULT);
    this.$racingCarList = document.getElementById(SELECTOR.RACING_CAR_LIST);
  }

  showRacingCountForm() {
    this.$racingCountForm.classList.add('visible');
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
    this.$racingCountForm.classList.remove('visible');
    this.$finalWinner.classList.remove('visible');
    this.$restartSection.classList.remove('visible');
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
    this.$racingCarList.innerText = '';
    this.$finalWinnerResult.innerText = '';
  }

  renderRacingCarList(template) {
    this.$racingCarList.insertAdjacentHTML('afterbegin', template);
  }

  renderRacingCarProgress(index) {
    this.$racingCarProgress = document.getElementsByClassName(SELECTOR.RACING_CAR_PROGRESS);
    this.$racingCarProgress[index].insertAdjacentHTML('afterbegin', PROGRESS_TEMPLATE);
  }

  renderFinalWinnerResult(finalWinner) {
    this.$finalWinnerResult.innerText = finalWinner;
  }

  removeLoadingSpinner() {
    Array.from(this.$racingCarProgress).forEach((element) => {
      element.lastElementChild.classList.add('hidden');
    });
  }
}

export default RacingCarView;
