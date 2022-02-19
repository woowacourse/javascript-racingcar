import { CLASS, ID } from '../constants/index.js';
import { $, $$ } from '../util/index.js';
import {
  templateRacingCountForm,
  templateRacingCarItem,
  templateProgress,
  templateSpinner,
  templateRestartButton,
} from '../template/index.js';

class RacingCarGameView {
  constructor() {
    this.$carNamesForm = $(`#${ID.CAR_NAMES_FORM}`);
    this.$carNamesInput = $(`#${ID.CAR_NAMES_INPUT}`);
    this.$racingCountForm = $(`#${ID.RACING_COUNT_FORM}`);
    this.$racingCountInput = null;
    this.$inputBtns = null;
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
    this.$restartSection.addEventListener('click', (e) => {
      if (e.target.id !== ID.RESTART_BTN) {
        return;
      }

      callback();
    });
  }

  changeToDisableForm() {
    this.$carNamesInput.setAttribute('disabled', true);
    this.$racingCountInput.setAttribute('disabled', true);
    this.$inputBtns.forEach(($inputBtn) => {
      $inputBtn.setAttribute('disabled', true);
      $inputBtn.classList.add(CLASS.DISABLED_INPUT_BTN);
    });
  }

  changeToEnabledForm() {
    this.$carNamesInput.removeAttribute('disabled');
    this.$racingCountInput.removeAttribute('disabled');

    this.$inputBtns.forEach(($inputBtn) => {
      $inputBtn.removeAttribute('disabled');
      $inputBtn.classList.remove(CLASS.DISABLED_INPUT_BTN);
    });
  }

  renderRacingCountForm() {
    if (this.$racingCountInput !== null) {
      return;
    }

    this.$racingCountForm.insertAdjacentHTML('beforeend', templateRacingCountForm);
    this.$racingCountInput = $(`#${ID.RACING_COUNT_INPUT}`);
    this.$inputBtns = $$(`.${CLASS.INPUT_BTN}`);
  }

  renderRacingCarList(racingCarList) {
    const racingCarItemsTemplate = racingCarList.reduce(
      (previousTemplate, car) => previousTemplate + templateRacingCarItem(car.getName()),
      ''
    );

    this.$racingCarList.insertAdjacentHTML('beforeend', racingCarItemsTemplate);
    this.$racingCarProgress = $$(`.${CLASS.RACING_CAR_PROGRESS}`);
    this.$spinnerContainers = $$(`.${CLASS.SPINNER_CONTAINER}`);
  }

  renderRacingCarProgress(index) {
    this.$racingCarProgress[index].insertAdjacentHTML('beforeend', templateProgress);
  }

  renderFinalWinner(finalWinner) {
    this.$finalWinnerResult.innerText = finalWinner;
    this.$finalWinner.style.display = 'block';
  }

  renderRestartButton() {
    this.$restartSection.insertAdjacentHTML('beforeend', templateRestartButton);
  }

  reset() {
    this.$carNamesInput.value = '';
    this.$racingCountForm.innerHTML = '';
    this.$racingCountInput = null;
    this.$restartSection.innerHTML = '';
  }

  hideElements() {
    this.$carNamesInput.value = '';

    this.$racingCarList.innerText = '';
    this.$finalWinnerResult.innerText = '';
  }

  resetElements() {
    this.$finalWinner.style.display = 'none';
  }

  renderSpinner() {
    this.$spinnerContainers.forEach(($spinnerContainer) =>
      $spinnerContainer.insertAdjacentHTML('beforeend', templateSpinner)
    );
  }

  removeSpinner() {
    this.$spinnerContainers.forEach(($spinnerContainer) =>
      $spinnerContainer.removeChild($spinnerContainer.lastElementChild)
    );
  }
}

export default RacingCarGameView;
