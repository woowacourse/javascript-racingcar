import { DELAY, SELECTOR } from '../constants/index.js';
import {
  getCongratulationTemplate,
  getRacingCarItemTemplate,
  PROGRESS_TEMPLATE,
} from './template.js';

class RacingCarView {
  constructor() {
    this.initDOM();
  }

  initDOM() {
    //자동차 이름 입력창
    this.$carNamesForm = document.getElementById(SELECTOR.CAR_NAMES_FORM);
    this.$carNamesInput = document.getElementById(SELECTOR.CAR_NAMES_INPUT);
    this.$carNamesButton = document.getElementById(SELECTOR.CAR_NAMES_BUTTON);
    //시도할 횟수 입력창
    this.$racingCountInputSection = document.getElementById(SELECTOR.RACING_COUNT_INPUT_SECTION);
    this.$racingCountForm = document.getElementById(SELECTOR.RACING_COUNT_FORM);
    this.$racingCountInput = document.getElementById(SELECTOR.RACING_COUNT_INPUT);
    this.$racingCountButton = document.getElementById(SELECTOR.RACING_COUNT_BUTTON);
    //자동차 경주 진행 상황
    this.$racingCarList = document.getElementById(SELECTOR.RACING_CAR_LIST);
    this.$finalWinner = document.getElementById(SELECTOR.FINAL_WINNER);
    this.$finalWinnerResult = document.getElementById(SELECTOR.FINAL_WINNER_RESULT);
    // 다시 시작하기
    this.$restartSection = document.getElementById(SELECTOR.RESTART_SECTION);
    this.$restartButton = document.getElementById(SELECTOR.RESTART_BUTTON);
  }

  setCarNameFormSubmitEvent(callback) {
    this.$carNamesForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const carNames = this.$carNamesInput.value;
      callback(carNames);
    });
  }

  setRacingCountFormSubmitEvent(callback) {
    this.$racingCountForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const racingCount = this.$racingCountInput.value;
      callback(racingCount);
    });
  }

  setRestartButtonClickEvent(callback) {
    this.$restartButton.addEventListener('click', () => {
      callback();
    });
  }

  showRacingCountForm() {
    this.$racingCountInputSection.removeAttribute('hidden');
    this.$racingCountInput.focus();
  }

  showFinalWinner() {
    this.$finalWinner.removeAttribute('hidden');
  }

  showRestartSection() {
    this.$restartSection.removeAttribute('hidden');
  }

  showCongratulationMessage() {
    const winner = this.$finalWinnerResult.innerText;

    setTimeout(() => {
      alert(getCongratulationTemplate(winner));
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
