import { CLASS, ID } from '../constants/index.js';
import {
  resetInputElementValue,
  modifyElementDisplayStyle,
  resetElementInnerText,
} from '../util/index.js';
import { getRacingCarItemTemplate, PROGRESS_TEMPLATE } from '../template/index.js';

class RacingCarGameView {
  constructor() {
    this.$carNamesForm = document.getElementById(ID.CAR_NAMES_FORM);
    this.$carNamesInput = document.getElementById(ID.CAR_NAMES_INPUT);
    this.$racingCountForm = document.getElementById(ID.RACING_COUNT_FORM);
    this.$racingCountInput = document.getElementById(ID.RACING_COUNT_INPUT);
    this.$racingCarList = document.getElementById(ID.RACING_CAR_LIST);
    this.$racingCarProgress = null;
    this.$finalWinnerResult = document.getElementById(ID.FINAL_WINNER_RESULT);
    this.$finalWinner = document.getElementById(ID.FINAL_WINNER);
    this.$restartSection = document.getElementById(ID.RESTART_SECTION);
    this.$restartBtn = document.getElementById(ID.RESTART_BTN);
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

    this.$racingCarList.innerHTML = racingCarItemsTemplate;
    this.$racingCarProgress = document.getElementsByClassName(CLASS.RACING_CAR_PROGRESS);
  }

  renderRacingCarProgress(index) {
    this.$racingCarProgress[index].insertAdjacentHTML('beforeend', PROGRESS_TEMPLATE);
  }

  renderFinalWinner(finalWinner) {
    this.$finalWinnerResult.innerText = finalWinner;
    modifyElementDisplayStyle(this.$finalWinner, 'block');
  }

  showRacingCountForm() {
    modifyElementDisplayStyle(this.$racingCountForm, 'block');
  }

  showRestartSection() {
    modifyElementDisplayStyle(this.$restartSection, 'block');
  }

  hideElements() {
    resetInputElementValue(this.$carNamesInput);
    resetInputElementValue(this.$racingCountInput);

    resetElementInnerText(this.$racingCarList);
    resetElementInnerText(this.$finalWinnerResult);
  }

  resetElements() {
    modifyElementDisplayStyle(this.$racingCountForm);
    modifyElementDisplayStyle(this.$finalWinner);
    modifyElementDisplayStyle(this.$restartSection);
  }
}

export default RacingCarGameView;
