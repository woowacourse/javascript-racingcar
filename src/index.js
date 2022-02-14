import { CLASS, ERROR_MESSAGES, ID, RULES } from './constants/index.js';
import {
  convertToNumber,
  generateRandomNumber,
  isNotNaturalNumber,
  waitGame,
  resetInputElementValue,
  modifyElementDisplayStyle,
  resetElementInnerText,
  handleError,
} from './util/index.js';
import { getRacingCarItemTemplate, PROGRESS_TEMPLATE } from './template/index.js';
import Car from './model/Car.js';

class RacingCar {
  constructor() {
    this.init();
    this.racingCarList = [];
    this.racingCount = 0;
  }

  init() {
    this.initDOM();
    this.initEventListener();
  }

  initDOM() {
    this.$carNamesForm = document.getElementById(ID.CAR_NAMES_FORM);
    this.$carNamesInput = document.getElementById(ID.CAR_NAMES_INPUT);
    this.$racingCountForm = document.getElementById(ID.RACING_COUNT_FORM);
    this.$racingCountInput = document.getElementById(ID.RACING_COUNT_INPUT);
    this.$racingCarList = document.getElementById(ID.RACING_CAR_LIST);
    this.$finalWinnerResult = document.getElementById(ID.FINAL_WINNER_RESULT);
    this.$finalWinner = document.getElementById(ID.FINAL_WINNER);
    this.$restartSection = document.getElementById(ID.RESTART_SECTION);
    this.$restartBtn = document.getElementById(ID.RESTART_BTN);
  }

  initEventListener() {
    this.$carNamesForm.addEventListener('submit', this.handleCarNameFormSubmitEvent.bind(this));
    this.$racingCountForm.addEventListener(
      'submit',
      this.handleRacingCountFormSubmitEvent.bind(this)
    );
    this.$restartBtn.addEventListener('click', this.handleRestartBtnClickEvent.bind(this));
  }

  handleCarNameFormSubmitEvent(e) {
    e.preventDefault();
    const carNames = this.$carNamesInput.value;

    if (this.isNotValidCarNames(carNames)) {
      return;
    }

    const carNamesArray = carNames.split(RULES.CAR_NAME_SEPERATOR).map((carName) => carName.trim());

    this.racingCarList = carNamesArray.map((carName) => new Car(carName));
    modifyElementDisplayStyle(this.$racingCountForm, 'block');
  }

  isNotValidCarNames(carNames) {
    if (carNames === RULES.EMPTY_STRING) {
      handleError(ERROR_MESSAGES.EMPTY_CAR_NAME, this.$carNamesInput);
      return true;
    }

    const carNamesArray = carNames.split(RULES.CAR_NAME_SEPERATOR).map((carName) => carName.trim());

    if (carNamesArray.some((carName) => carName.length > RULES.MAX_CAR_NAME_LENGTH)) {
      handleError(ERROR_MESSAGES.EXCEED_CAR_NAME_LENGTH, this.$carNamesInput);
      return true;
    }

    if (carNamesArray.some((carName) => carName.length === RULES.ZERO_CAR_NAME_LENGTH)) {
      handleError(ERROR_MESSAGES.BLANK_CAR_NAME, this.$carNamesInput);
      return true;
    }

    return false;
  }

  handleRacingCountFormSubmitEvent(e) {
    e.preventDefault();
    const racingCount = this.$racingCountInput.value;

    if (this.isNotValidRacingCount(racingCount)) {
      return;
    }

    const racingCountNumber = convertToNumber(racingCount);
    this.racingCount = racingCountNumber;
    this.play();
  }

  isNotValidRacingCount(racingCount) {
    if (racingCount === RULES.EMPTY_STRING) {
      handleError(ERROR_MESSAGES.BLANK_RACING_COUNT, this.$racingCountInput);
      return true;
    }

    const racingCountNumber = convertToNumber(racingCount);

    if (typeof racingCountNumber !== 'number') {
      handleError(ERROR_MESSAGES.NOT_NUMBER_TYPE, this.$racingCountInput);
      return true;
    }

    if (isNotNaturalNumber(racingCountNumber)) {
      handleError(ERROR_MESSAGES.NOT_NATURAL_NUMBER, this.$racingCountInput);
      return true;
    }

    return false;
  }

  handleRestartBtnClickEvent(e) {
    this.resetGameStatus();
    this.resetElement();
    this.modifyStyle();
  }

  resetGameStatus() {
    this.racingCarList = [];
    this.racingCount = 0;
  }

  resetElement() {
    resetInputElementValue(this.$carNamesInput);
    resetInputElementValue(this.$racingCountInput);
    resetElementInnerText(this.$racingCarList);
    resetElementInnerText(this.$finalWinnerResult);
  }

  modifyStyle() {
    modifyElementDisplayStyle(this.$racingCountForm, 'none');
    modifyElementDisplayStyle(this.$finalWinner, 'none');
    modifyElementDisplayStyle(this.$restartSection, 'none');
  }

  play() {
    this.renderRacingCarList();
    this.$racingCarProgress = document.getElementsByClassName(CLASS.RACING_CAR_PROGRESS);
    this.startRacingGame();
  }

  renderRacingCarList() {
    const racingCarItemsTemplate = this.racingCarList.reduce(
      (previousTemplate, car) => previousTemplate + getRacingCarItemTemplate(car.getName()),
      ''
    );

    this.$racingCarList.innerHTML = racingCarItemsTemplate;
  }

  async startRacingGame() {
    for (let i = 0; i < this.racingCount; i++) {
      this.runOneCycleGame();
      await waitGame(RULES.WAITING_TIME);
    }

    this.handleGameResult();
    this.showRestartSection();
  }

  runOneCycleGame() {
    this.racingCarList.forEach((car, index) => {
      const randomNumber = generateRandomNumber();

      if (randomNumber >= RULES.MOVE_CONDITION_NUMBER) {
        car.moveForward();
        this.renderRacingCarProgress(index);
      }
    });
  }

  renderRacingCarProgress(index) {
    this.$racingCarProgress[index].insertAdjacentHTML('beforeend', PROGRESS_TEMPLATE);
  }

  handleGameResult() {
    const finalWinner = this.getFinalWinner();
    this.renderFinalWinner(finalWinner);
  }

  getFinalWinner() {
    const maxDistance = this.getMaxDistance(this.racingCarList);
    const winnerList = this.getWinnerList(this.racingCarList, maxDistance);
    return winnerList.join(RULES.WINNER_LIST_SEPERATOR);
  }

  getMaxDistance(racingCarList) {
    const distance = racingCarList.map((car) => car.getDistance());
    const maxDistance = Math.max(...distance);

    return maxDistance;
  }

  getWinnerList(racingCarList, maxDistance) {
    return racingCarList
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
  }

  renderFinalWinner(finalWinner) {
    this.$finalWinnerResult.innerText = finalWinner;
    modifyElementDisplayStyle(this.$finalWinner, 'block');
  }

  showRestartSection() {
    modifyElementDisplayStyle(this.$restartSection, 'block');
  }
}

new RacingCar();
