import { CLASS, ID } from '../constants/index.js';
import { PROGRESS_TEMPLATE } from '../template/index.js';

class RacingCarView {
  constructor() {
    this.initDOM();
  }

  initDOM() {
    this.$carNamesInput = document.getElementById(ID.CAR_NAMES_INPUT);
    this.$racingCountForm = document.getElementById(ID.RACING_COUNT_FORM);
    this.$racingCountInput = document.getElementById(ID.RACING_COUNT_INPUT);
    this.$racingCarList = document.getElementById(ID.RACING_CAR_LIST);
    this.$finalWinner = document.getElementById(ID.FINAL_WINNER);
    this.$restartSection = document.getElementById(ID.RESTART_SECTION);
    this.$finalWinnerResult = document.getElementById(ID.FINAL_WINNER_RESULT);
    this.$racingCarList = document.getElementById(ID.RACING_CAR_LIST);
  }

  showRacingCountForm() {
    this.$racingCountForm.style.display = 'block';
  }

  showFinalWinner() {
    this.$finalWinner.style.display = 'block';
  }

  showRestartSection() {
    this.$restartSection.style.display = 'block';
  }

  hideElement() {
    this.$racingCountForm.style.display = 'none';
    this.$finalWinner.style.display = 'none';
    this.$restartSection.style.display = 'none';
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
    this.$racingCarList.innerHTML = template;
  }

  renderRacingCarProgress(index) {
    this.$racingCarProgress = document.getElementsByClassName(CLASS.RACING_CAR_PROGRESS);
    this.$racingCarProgress[index].insertAdjacentHTML('beforeend', PROGRESS_TEMPLATE);
  }

  renderFinalWinnerResult(finalWinner) {
    this.$finalWinnerResult.innerText = finalWinner;
  }
}

export default RacingCarView;
