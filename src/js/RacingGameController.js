import { RacingGameModel } from './models/index.js';
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
    this._racingGameModel.carListPush(nameStringToArray(carNameValue));

    return true;
  }

  handleRaceTimeInput(event) {
    event.preventDefault();

    const raceTimeValue = $(SELECTOR.RACE_TIME_INPUT).value;
    if (!isRaceTimeCheck(raceTimeValue)) {
      return false;
    }

    this._racingGameView.setDisableForm($(SELECTOR.RACE_TIME_FORM));
    this._racingGameModel.round = raceTimeValue;
    this.handleGamePlay(event);

    return false;
  }

  handleGamePlay(event) {
    event.preventDefault();
    this.handleWinnerDisplay();

    $(SELECTOR.RACE_CONTAINER_DIV).innerHTML = '';

    this._racingGameModel.carList.forEach((instance) => {
      const { name } = instance.state;
      this._racingGameView.renderAdvanceDiv(name);
    });

    for (let i = 1; i < this._racingGameModel.round; i += 1) {
      try {
        this._racingGameModel.play();
        //잠쉬
      } catch (err) {
        alert(err);
        break;
      }
    }
  }

  handleWinnerDisplay() {
    this._racingGameView.renderResult();
  }

  handleReplayGame() {}
}
