import RacingGame from './RacingGame.js';
import RacingResult from '../views/RacingResult.js';
import { $ } from '../utils/dom.js';
import { SELECTOR, ERROR_MESSAGE } from '../utils/constants.js';
import {
  isValidCarNameBlank,
  isValidCarNameLength,
  isValidRacingCount,
} from '../utils/validation.js';

export default class RacingForm {
  constructor() {
    this.RacingGame = new RacingGame();
    this.RacingResult = new RacingResult();
    this.bindEvents();
  }

  bindEvents() {
    $(SELECTOR.CAR_NAMES_BUTTON).addEventListener('click', this.handleCarNamesSubmit.bind(this));
    $(SELECTOR.RACING_COUNT_BUTTON).addEventListener(
      'click',
      this.handleRacingCountSubmit.bind(this),
    );
  }

  handleCarNamesSubmit() {
    const carNames = $(SELECTOR.CAR_NAMES_INPUT)
      .value.split(',')
      .map((car) => car.trim());

    if (!isValidCarNameLength(carNames)) {
      $(SELECTOR.CAR_NAMES_INPUT).value = '';
      alert(ERROR_MESSAGE.NAME_TOO_LONG);
      return;
    }
    if (!isValidCarNameBlank(carNames)) {
      $(SELECTOR.CAR_NAMES_INPUT).value = '';
      alert(ERROR_MESSAGE.NAME_CANNOT_BE_BLANK);
      return;
    }
    this.RacingGame.generateCars(carNames);
    this.RacingResult.showNextStage($(SELECTOR.RACING_COUNT_CONTAINER));
  }

  handleRacingCountSubmit() {
    const racingCount = $(SELECTOR.RACING_COUNT_INPUT).value;
    if (isValidRacingCount(racingCount)) {
      $(SELECTOR.RACING_COUNT_INPUT).value = '';
      alert(ERROR_MESSAGE.COUNT_TOO_SMALL);
      return;
    }
    this.RacingResult.showNextStage($(SELECTOR.RACING_CONTAINER));
    this.RacingGame.startRacingGame(racingCount);
  }
}
