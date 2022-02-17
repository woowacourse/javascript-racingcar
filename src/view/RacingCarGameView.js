import { CLASS, ID } from '../constants/index.js';
import { $, $$ } from '../util/index.js';
import { getRacingCarItemTemplate, PROGRESS_TEMPLATE, templateSpinner } from '../template/index.js';

class RacingCarGameView {
  constructor() {
    this.$carNamesForm = $(`#${ID.CAR_NAMES_FORM}`);
    this.$carNamesInput = $(`#${ID.CAR_NAMES_INPUT}`);
    this.$racingCountForm = $(`#${ID.RACING_COUNT_FORM}`);
    this.$racingCountInput = $(`#${ID.RACING_COUNT_INPUT}`);
    this.$racingCarList = $(`#${ID.RACING_CAR_LIST}`);
    this.$racingCarProgress = null;
    this.$spinnerContainers = null;
    this.$finalWinnerResult = $(`#${ID.FINAL_WINNER_RESULT}`);
    this.$finalWinner = $(`#${ID.FINAL_WINNER}`);
    this.$restartSection = $(`#${ID.RESTART_SECTION}`);
    this.$restartBtn = $(`#${ID.RESTART_BTN}`);
  }

  setCarNameFormEventHandler(callback) {
    this.$carNamesForm.addEventListener('submit', (e) => {
      e.preventDefault();
      callback(this.$carNamesInput.value);
    });
  }

  setRacingCountFormEventHandler(callback) {
    this.$racingCountForm.addEventListener('submit', (e) => {
      e.preventDefault();
      callback(this.$racingCountInput.value);
    });
  }

  setRestartBtnEventHandler(callback) {
    this.$restartBtn.addEventListener('click', () => {
      callback();
    });
  }

  renderRacingCarList(racingCarList) {
    const racingCarItemsTemplate = racingCarList.reduce(
      (previousTemplate, car) => previousTemplate + getRacingCarItemTemplate(car.getName()),
      ''
    );

    this.$racingCarList.insertAdjacentHTML('beforeend', racingCarItemsTemplate);
    this.$racingCarProgress = $$(`.${CLASS.RACING_CAR_PROGRESS}`);
    this.$spinnerContainers = $$(`.${CLASS.SPINNER_CONTAINER}`);
  }

  renderRacingCarProgress(index) {
    this.$racingCarProgress[index].insertAdjacentHTML('beforeend', PROGRESS_TEMPLATE);
  }

  renderFinalWinner(finalWinner) {
    this.$finalWinnerResult.innerText = finalWinner;
    this.$finalWinner.style.display = 'block';
  }

  showRacingCountForm() {
    this.$racingCountForm.style.display = 'block';
  }

  showRestartSection() {
    this.$restartSection.style.display = 'block';
  }

  hideElements() {
    this.$carNamesInput.value = '';
    this.$racingCountInput.value = '';

    this.$racingCarList.innerText = '';
    this.$finalWinnerResult.innerText = '';
  }

  resetElements() {
    this.$racingCountForm.style.display = 'none';
    this.$finalWinner.style.display = 'none';
    this.$restartSection.style.display = 'none';
  }

  renderSpinner() {
    this.$spinnerContainers.forEach(($spinnerContainer) =>
      $spinnerContainer.insertAdjacentHTML('beforeend', templateSpinner)
    );
  }

  removeSpinner() {
    this.$spinnerContainers.forEach(($spinnerContainer) => $spinnerContainer.remove());
  }
}

export default RacingCarGameView;
