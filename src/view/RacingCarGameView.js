import { CLASS, ID } from '../constants/index.js';
import { $, $$ } from '../util/index.js';
import {
  templateRacingCountForm,
  templateRacingCarItem,
  templateProgress,
  templateSpinner,
  templateFinalWinner,
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

      if (this.$racingCountInput === null) {
        return;
      }

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

  deactivateForm() {
    this.$carNamesInput.setAttribute('disabled', true);
    this.$racingCountInput?.setAttribute('disabled', true);
    this.$inputBtns?.forEach(($inputBtn) => {
      $inputBtn.setAttribute('disabled', true);
      $inputBtn.classList.add(CLASS.DISABLED_INPUT_BTN);
    });
  }

  #activateNameForm() {
    this.$carNamesInput.removeAttribute('disabled');

    if (this.$inputBtns === null) {
      return;
    }

    this.$inputBtns[0].removeAttribute('disabled');
    this.$inputBtns[0].classList.remove(CLASS.DISABLED_INPUT_BTN);
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

  renderRacingCarProgress(racingCarList) {
    if (this.$racingCarProgress === null) {
      return;
    }

    racingCarList.forEach((car, index) => {
      if (car.getIsForwarded()) {
        this.$racingCarProgress[index].insertAdjacentHTML('beforeend', templateProgress);
      }
    });
  }

  renderFinalWinner(finalWinner) {
    this.$finalWinner.insertAdjacentHTML('beforeend', templateFinalWinner(finalWinner));
  }

  renderRestartButton() {
    this.$restartSection.insertAdjacentHTML('beforeend', templateRestartButton);
  }

  renderSpinner() {
    this.$spinnerContainers?.forEach(($spinnerContainer) =>
      $spinnerContainer.insertAdjacentHTML('beforeend', templateSpinner)
    );
  }

  removeSpinner() {
    this.$spinnerContainers?.forEach(($spinnerContainer) =>
      $spinnerContainer.removeChild($spinnerContainer.lastElementChild)
    );
  }

  reset() {
    this.#activateNameForm();
    this.$carNamesInput.value = '';
    this.$racingCountForm.innerHTML = '';
    this.$racingCountInput = null;
    this.$racingCarList.innerText = '';
    this.$finalWinner.innerHTML = '';
    this.$restartSection.innerHTML = '';
  }
}

export default RacingCarGameView;
