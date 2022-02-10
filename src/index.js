import { ERROR_MESSAGES, ID, RULES } from './constants/index.js';

class RacingCar {
  constructor() {
    this.init();
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
  }

  initEventListener() {
    this.$carNamesForm.addEventListener('submit', this.handleCarNameFormSubmitEvent.bind(this));
    this.$racingCountForm.addEventListener(
      'submit',
      this.handleRacingCountFormSubmitEvent.bind(this)
    );
  }

  handleRacingCountFormSubmitEvent(e) {
    e.preventDefault();
    const racingCount = this.$racingCountInput.value;

    // 시도할 횟수가 공백인 경우
    if (racingCount === '') {
      alert(ERROR_MESSAGES.BLANK_RACING_COUNT);
      return;
    }

    const racingCountNumber = this.convertToNumber(racingCount);

    // number 타입이 아닌 경우
    if (typeof racingCountNumber !== 'number') {
      alert(ERROR_MESSAGES.NOT_NUMBER_TYPE);
      return;
    }

    // 1보다 작은 경우 + 실수이 경우
    if (racingCountNumber < 1 || Math.floor(racingCountNumber) !== racingCountNumber) {
      alert(ERROR_MESSAGES.NOT_NATURAL_NUMBER);
      return;
    }
  }

  handleCarNameFormSubmitEvent(e) {
    e.preventDefault();

    const carNames = this.$carNamesInput.value;

    if (carNames === '') {
      alert(ERROR_MESSAGES.EMPTY_CAR_NAME);
      return;
    }

    const carNamesArray = carNames.split(RULES.SEPERATOR).map((carName) => carName.trim());

    if (carNamesArray.some((carName) => carName.length > RULES.MAX_CAR_NAME_LENGTH)) {
      alert(ERROR_MESSAGES.EXCEED_CAR_NAME_LENGTH);
      return;
    }

    if (carNamesArray.some((carName) => carName.length === RULES.ZERO_CAR_NAME_LENGTH)) {
      alert(ERROR_MESSAGES.BLANK_CAR_NAME);
      return;
    }

    this.$racingCountForm.style.display = 'block';
  }

  convertToNumber(value) {
    return parseInt(value, 10);
  }
}

new RacingCar();
