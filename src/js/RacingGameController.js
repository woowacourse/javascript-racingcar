import RacingGameModel from './models/RacingGameModel.js';
import RacingGameView from './RacingGameView.js';
import nameStringToArray from './utils/nameStringToArray.js';
import { $ } from './utils/element-tools.js';
import { SELECTOR } from './constants/selector.js';
import { isCarNameValid, isRaceTimeValid } from './utils/validator.js';

export default class RacingGameController {
  #racingGameModel;
  #racingGameView;

  constructor() {
    this.#racingGameModel = new RacingGameModel();
    this.#racingGameView = new RacingGameView();

    this.bindDefaultEvent();
    this.init();
  }

  init() {
    this.#racingGameModel.init();
  }

  bindDefaultEvent() {
    $(SELECTOR.CAR_NAME_BUTTON).addEventListener(
      'click',
      this.handleCarNameInput.bind(this)
    );

    $(SELECTOR.RACE_TIME_BUTTON).addEventListener(
      'click',
      this.handleRaceTimeInput.bind(this)
    );

    $(SELECTOR.RETRY_BUTTON).addEventListener(
      'click',
      this.handleGameRetry.bind(this)
    );
  }

  handleCarNameInput(event) {
    event.preventDefault();

    const carNameValue = $(SELECTOR.CAR_NAME_INPUT).value;
    if (!isCarNameValid(carNameValue)) {
      return false;
    }

    this.#racingGameView.setDisableForm(event.target);
    this.#racingGameModel.carList = nameStringToArray(carNameValue);

    this.handleGameTry();
    return false;
  }

  handleRaceTimeInput(event) {
    event.preventDefault();

    const raceTimeValue = $(SELECTOR.RACE_TIME_INPUT).value;
    if (!isRaceTimeValid(raceTimeValue)) {
      return false;
    }

    this.#racingGameView.setDisableForm(event.target);
    this.#racingGameModel.round = raceTimeValue;

    this.handleGameTry();
    return false;
  }

  handleGameTry() {
    const { round, carList } = this.#racingGameModel;
    if (!round || carList.length === 0) {
      return false;
    }

    this.handleGamePlay();
  }

  handleGamePlay() {
    const { round: gameRound } = this.#racingGameModel;
    Array.from({ length: gameRound }, () => this.#racingGameModel.play());

    const { carList, winners } = this.#racingGameModel;
    this.#racingGameView.renderResult(carList, winners);
    this.#racingGameView.setVisibleResult(true);
  }

  handleGameRetry(event) {
    event.preventDefault();

    this.#racingGameModel.init();
    this.#racingGameView.init();
    return false;
  }
}
