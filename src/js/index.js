import RacingGame from './models/RacingGame.js';
import RacingGameView from './views/RacingGameView.js';
import nameStringToArray from './utils/nameStringToArray.js';
import { $ } from './utils/elementSeletor.js';
import SELECTOR from './constants/selector.js';
import { isCarNameInputValid, isRaceTimeValid } from './racingGameHelper.js';
import delay from './utils/delay.js';

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

  async handleGamePlay(event) {
    event.preventDefault();

    // 박스 생성
    this.RacingGame.carList.forEach((instance) => {
      const { name } = instance.state;
      this.View.renderAdvanceDiv(name);
    });

    this.handleProgressDisplay();

    // 라운드만큼 반복
    for (
      let currentRound = 1;
      currentRound <= this.RacingGame.round;
      currentRound += 1
    ) {
      await this.progressRound();
    }

    this.handleWinnerDisplay();
  }

  handleProgressDisplay() {
    this.View.renderProgress();
  }

  async handleWinnerDisplay() {
    this.View.renderResult(this.RacingGame.winner());
    await delay(2000);
    alert('우승자는 ' + this.RacingGame.winner() + '입니다. 축하합니다!');
    this.View.renderReplayButton();
  }

  handleReplayGame() {
    this.View.renderInit();
    this.RacingGame.init();
  }

  async progressRound() {
    this.View.LoadingStart();
    await delay(1000);
    this.View.LoadingEnd();

    this.RacingGame.play();
    this.RacingGame.carList.forEach((car) => {
      if (car.isMovedInLastRound) {
        this.View.renderAdvance(car.name);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new App());
