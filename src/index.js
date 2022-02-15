import { CLASS, ERROR_MESSAGES, ID, RULES } from './constants/index.js';
import {
  isNotNaturalNumber,
  isExceedLength,
  isEmpty,
  isNotNumberType,
  convertToNumber,
  generateRandomNumber,
  delay,
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
    const carNamesList = carNames.split(RULES.CAR_NAME_SEPERATOR).map((carName) => carName.trim());

    try {
      this.checkValidCarNames(carNamesList);
      this.racingCarList = carNamesList.map((carName) => new Car(carName));
      this.$racingCountForm.style.display = 'block';
    } catch (error) {
      this.$carNamesInput.value = '';
      alert(error);
      return;
    }
  }

  checkValidCarNames(carNamesList) {
    if (carNamesList.some(isExceedLength)) {
      throw new Error(ERROR_MESSAGES.EXCEED_CAR_NAME_LENGTH);
    }

    if (carNamesList.some(isEmpty)) {
      throw new Error(ERROR_MESSAGES.BLANK_CAR_NAME);
    }
  }

  handleRacingCountFormSubmitEvent(e) {
    e.preventDefault();
    const racingCount = convertToNumber(this.$racingCountInput.value);

    try {
      this.checkValidRacingCount(racingCount);
      this.racingCount = racingCount;
      this.play();
    } catch (error) {
      this.$racingCountInput.value = '';
      alert(error);
      return;
    }
  }

  checkValidRacingCount(racingCount) {
    if (isNaN(racingCount)) {
      throw new Error(ERROR_MESSAGES.BLANK_RACING_COUNT);
    }

    if (isNotNumberType(racingCount)) {
      throw new Error(ERROR_MESSAGES.NOT_NUMBER_TYPE);
    }

    if (isNotNaturalNumber(racingCount)) {
      throw new Error(ERROR_MESSAGES.NOT_NATURAL_NUMBER);
    }
  }

  play() {
    this.renderRacingCarList();
    this.racingGameStart();
  }

  renderRacingCarList() {
    const initializeValue = '';

    const racingCarItemsTemplate = this.racingCarList.reduce(
      (result, car) => result + getRacingCarItemTemplate(car.getName()),
      initializeValue
    );

    this.$racingCarList.innerHTML = racingCarItemsTemplate;
  }

  async racingGameStart() {
    for (let i = 0; i < this.racingCount; i = i + 1) {
      this.runOneCycleGame();
      await delay(RULES.WAITING_TIME);
    }

    this.handleGameResult();
    this.$finalWinner.style.display = 'block';
    this.$restartSection.style.display = 'block';
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
    this.$racingCarProgress = document.getElementsByClassName(CLASS.RACING_CAR_PROGRESS);
    this.$racingCarProgress[index].insertAdjacentHTML('beforeend', PROGRESS_TEMPLATE);
  }

  handleGameResult() {
    const finalWinner = this.getFinalWinner();
    this.$finalWinnerResult.innerText = finalWinner;
  }

  getFinalWinner() {
    const maxDistance = this.getMaxDistance(this.racingCarList);
    const winnerList = this.getWinnerList(maxDistance);

    return winnerList.join(RULES.WINNER_LIST_SEPERATOR);
  }

  getMaxDistance(racingCarList) {
    return Math.max(...racingCarList.map((car) => car.getDistance()));
  }

  getWinnerList(maxDistance) {
    return this.racingCarList
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
  }

  handleRestartBtnClickEvent() {
    this.resetGameStatus();
    this.resetElement();
    this.modifyStyle();
  }

  resetGameStatus() {
    this.racingCarList = [];
    this.racingCount = 0;
  }

  resetElement() {
    this.$carNamesInput.value = '';
    this.$racingCountInput.value = '';
    this.$racingCarList.innerText = '';
    this.$finalWinnerResult.innerText = '';
  }

  modifyStyle() {
    this.$racingCountForm.style.display = 'none';
    this.$finalWinner.style.display = 'none';
    this.$restartSection.style.display = 'none';
  }
}

new RacingCar();
