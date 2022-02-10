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
    alert('test');
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
}

new RacingCar();
