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

  async handleGamePlay(event) {
    event.preventDefault();

    // 박스 생성
    this.RacingGame.carList.forEach((instance) => {
      const { name } = instance.state;
      this.View.renderAdvanceDiv(name);
    });

    this.handleProgressDisplay();

    // 라운드만큼 반복
    for (let i = 1; i <= this.RacingGame.round; i += 1) {
      await this.progressRound();
    }

    this.handleWinnerDisplay();
  }

  handleProgressDisplay() {
    this.View.renderProgress();
  }

  handleWinnerDisplay() {
    this.View.renderResult(this.RacingGame.winner());
  }

  handleReplayGame() {
    this.View.renderInit();
    this.RacingGame.init();
  }

  async progressRound() {
    const wait = (timeToDelay) =>
      new Promise((resolve) => setTimeout(resolve, timeToDelay));

    // 로딩 애니메이션 시작
    this.View.LoadingStart();
    // 1초 타이머 시작
    await wait(1000);
    // 타이머 종료시 로딩 애니메이션 삭제
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
