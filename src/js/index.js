import RacingGame from './models/RacingGame.js';
import RacingGameView from './RacingGameView.js';
import nameStringToArray from './utils/nameStringToArray.js';
import { $ } from './utils/element-tools.js';
import SELECTOR from './constants/selector.js';
import {
  isCarNameInputValid,
  isRaceTimeValid,
} from './utils/racingGame-validation.js';

class App {
  constructor() {
    this.View = new RacingGameView();
    this.RacingGame = new RacingGame();

    this.bindDefaultEvent();
    this.init();
  }

  init() {
    this.RacingGame.init();
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

    $(SELECTOR.RACE_REPLAY_BUTTON).addEventListener(
      'click',
      this.handleReplayGame.bind(this)
    );
  }

  handleCarNameInput(event) {
    event.preventDefault();

    const carNameValue = $(SELECTOR.CAR_NAME_INPUT).value;
    if (!isCarNameInputValid(carNameValue)) {
      return false;
    }

    this.View.setDisableForm($(SELECTOR.CAR_NAME_FORM));
    this.View.setAbleForm($(SELECTOR.RACE_TIME_FORM));
    this.RacingGame.carListPush(nameStringToArray(carNameValue));

    return true;
  }

  handleRaceTimeInput(event) {
    event.preventDefault();

    const raceTimeValue = $(SELECTOR.RACE_TIME_INPUT).value;
    if (!isRaceTimeValid(raceTimeValue)) {
      return false;
    }

    this.View.setDisableForm($(SELECTOR.RACE_TIME_FORM));
    this.RacingGame.round = raceTimeValue;
    this.handleGamePlay(event);

    return false;
  }

  handleGamePlay(event) {
    event.preventDefault();

    this.RacingGame.carList.forEach((instance) => {
      const { name } = instance.state;
      this.View.renderAdvanceDiv(name);
    });

    for (let i = 1; i <= this.RacingGame.round; i += 1) {
      try {
        this.RacingGame.play();
      } catch (err) {
        alert(err);
        break;
      }
    }

    this.handleWinnerDisplay();
  }

  handleWinnerDisplay() {
    this.View.renderResult(this.RacingGame.winner());
  }

  handleReplayGame() {
    this.View.renderInit();
    this.RacingGame.init();
  }
}

document.addEventListener('DOMContentLoaded', () => new App());
