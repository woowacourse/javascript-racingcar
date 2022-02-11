import { CLASS, ERROR_MESSAGES, ID, RULES } from './constants/index.js';
import {
  convertToNumber,
  generateRandomNumber,
  isNotNaturalNumber,
  waitGame,
  resetInputElementValue,
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
  }

  initEventListener() {
    this.$carNamesForm.addEventListener('submit', this.handleCarNameFormSubmitEvent.bind(this));
    this.$racingCountForm.addEventListener(
      'submit',
      this.handleRacingCountFormSubmitEvent.bind(this)
    );
  }

  handleCarNameFormSubmitEvent(e) {
    e.preventDefault();

    const carNames = this.$carNamesInput.value;

    if (carNames === '') {
      alert(ERROR_MESSAGES.EMPTY_CAR_NAME);
      resetInputElementValue(this.$carNamesInput);
      return;
    }

    const carNamesArray = carNames.split(RULES.SEPERATOR).map((carName) => carName.trim());

    if (carNamesArray.some((carName) => carName.length > RULES.MAX_CAR_NAME_LENGTH)) {
      alert(ERROR_MESSAGES.EXCEED_CAR_NAME_LENGTH);
      resetInputElementValue(this.$carNamesInput);
      return;
    }

    if (carNamesArray.some((carName) => carName.length === RULES.ZERO_CAR_NAME_LENGTH)) {
      alert(ERROR_MESSAGES.BLANK_CAR_NAME);
      resetInputElementValue(this.$carNamesInput);
      return;
    }

    this.racingCarList = carNamesArray.map((carName) => new Car(carName));

    this.$racingCountForm.style.display = 'block';
  }

  handleRacingCountFormSubmitEvent(e) {
    e.preventDefault();
    const racingCount = this.$racingCountInput.value;

    if (racingCount === '') {
      alert(ERROR_MESSAGES.BLANK_RACING_COUNT);
      resetInputElementValue(this.$racingCountInput);
      return;
    }

    const racingCountNumber = convertToNumber(racingCount);

    if (typeof racingCountNumber !== 'number') {
      alert(ERROR_MESSAGES.NOT_NUMBER_TYPE);
      resetInputElementValue(this.$racingCountInput);
      return;
    }

    if (isNotNaturalNumber(racingCountNumber)) {
      alert(ERROR_MESSAGES.NOT_NATURAL_NUMBER);
      resetInputElementValue(this.$racingCountInput);
      return;
    }

    this.racingCount = racingCountNumber;

    this.play();
  }

  play() {
    this.renderRacingCarList();
    this.$racingCarProgress = document.getElementsByClassName(CLASS.RACING_CAR_PROGRESS);
    this.racingGameStart();
  }

  renderRacingCarList() {
    let racingCarItemsTemplate = '';

    this.racingCarList.map((car) => {
      racingCarItemsTemplate = racingCarItemsTemplate + getRacingCarItemTemplate(car.getName());
    });

    this.$racingCarList.innerHTML = racingCarItemsTemplate;
  }

  async racingGameStart() {
    for (let i = 0; i < this.racingCount; i++) {
      this.runOneCycleGame();
      await waitGame(RULES.WAITING_TIME);
    }
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
}

new RacingCar();
