import RacingGameModel from './models/RacingGameModel.js';
import RacingGameView from './RacingGameView.js';
import nameStringToArray from './utils/nameStringToArray.js';
import { $ } from './utils/element-tools.js';
import SELECTOR from './constants/selector.js';
import {
  isCarNameInputCheck,
  isRaceTimeCheck,
} from './utils/racingGame-validation.js';

export default class RacingGameController {
  constructor() {
    this._racingGameModel = new RacingGameModel();
    this._racingGameView = new RacingGameView();

    this.bindDefaultEvent();
    this.init();
  }

  init() {
    this._racingGameModel.init();
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
  }

  handleCarNameInput(event) {
    event.preventDefault();

    const carNameValue = $(SELECTOR.CAR_NAME_INPUT).value;
    if (!isCarNameInputCheck(carNameValue)) {
      return false;
    }

    this._racingGameView.setDisableForm($(SELECTOR.CAR_NAME_FORM));
    this._racingGameModel.carList = nameStringToArray(carNameValue);

    return false;
  }

  handleRaceTimeInput(event) {
    event.preventDefault();

    const raceTimeValue = $(SELECTOR.RACE_TIME_INPUT).value;
    if (!isRaceTimeCheck(raceTimeValue)) {
      return false;
    }

    this._racingGameView.setDisableForm($(SELECTOR.RACE_TIME_FORM));
    this._racingGameModel.round = raceTimeValue;
    this.handleGamePlay();

    return false;
  }

  handleGamePlay() {
    const { round: gameRound } = this._racingGameModel;
    Array.from({ length: gameRound }, () => this._racingGameModel.play());

    const { carList, winners } = this._racingGameModel;
    this._racingGameView.renderResult(carList, winners);
  }
}
