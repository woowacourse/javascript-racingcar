import RacingGame from './RacingGame.js';
import { $ } from '../utils/dom.js';
import { SELECTOR, ERROR_MESSAGE, CAR_NAME_LENGTH, RACING_MIN_COUNT } from '../utils/constants.js';
import { isLessNumber, isValidBlankInArray, isValidLengthInArray } from '../utils/validation.js';

export default class RacingForm {
  #RacingGame = new RacingGame();

  constructor() {
    this.bindEvents();
  }

  bindEvents() {
    $(SELECTOR.CAR_NAMES_BUTTON).addEventListener('click', this.onSubmitCarNames.bind(this));
    $(SELECTOR.RACING_COUNT_BUTTON).addEventListener('click', this.onSubmitRacingCount.bind(this));
  }

  onSubmitCarNames() {
    const carNames = $(SELECTOR.CAR_NAMES_INPUT)
      .value.split(',')
      .map((car) => car.trim());

    if (!isValidLengthInArray(carNames, CAR_NAME_LENGTH.MAX)) {
      $(SELECTOR.CAR_NAMES_INPUT).value = '';
      alert(ERROR_MESSAGE.NAME_TOO_LONG);
      return;
    }
    if (!isValidBlankInArray(carNames, CAR_NAME_LENGTH.MIN)) {
      $(SELECTOR.CAR_NAMES_INPUT).value = '';
      alert(ERROR_MESSAGE.NAME_CANNOT_BE_BLANK);
      return;
    }
    this.#RacingGame.handleCarNamesSubmit(carNames);
  }

  onSubmitRacingCount() {
    const racingCount = $(SELECTOR.RACING_COUNT_INPUT).value;
    if (isLessNumber(racingCount, RACING_MIN_COUNT)) {
      $(SELECTOR.RACING_COUNT_INPUT).value = '';
      alert(ERROR_MESSAGE.COUNT_TOO_SMALL);
      return;
    }
    this.#RacingGame.startRacingGame(racingCount);
  }
}
