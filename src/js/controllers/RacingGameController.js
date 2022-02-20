import RacingGameModel from '../models/RacingGameModel.js';
import RacingGameView from '../views/RacingGameView.js';

import { SELECTOR } from '../constants/selector.js';
import GAME_SETTING from '../constants/RacingGame/setting.js';
import { RESULT_MESSAGE } from '../constants/message.js';
import { $ } from '../utils/element-tools.js';
import { getTimeDiffToPercent, nameStringToArray } from '../utils/data-manager.js';
import { setDelay, runAnimation } from '../utils/event-manager.js';
import { isCarNameValid, isRaceTimeValid, isGameSetup } from '../utils/RacingGame/validator.js';

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
    this.#racingGameView.bindCarNameInput(this.handleCarNameInput.bind(this));

    $(SELECTOR.RACE_TIME_BUTTON).addEventListener('click', this.handleRaceTimeInput.bind(this));
    $(SELECTOR.RETRY_BUTTON).addEventListener('click', this.handleGameRetry.bind(this));
  }

  handleCarNameInput({ event, carNameList }) {
    if (!isCarNameValid(carNameList)) {
      return false;
    }

    this.#racingGameView.setDisableForm(event.target);
    this.#racingGameModel.carList = nameStringToArray(carNameList);

    this.tryRacingGameStart();
  }

  handleRaceTimeInput(event) {
    event.preventDefault();

    const raceTimeValue = $(SELECTOR.RACE_TIME_INPUT).value;
    if (!isRaceTimeValid(raceTimeValue)) {
      return false;
    }

    this.#racingGameView.setDisableForm(event.target);
    this.#racingGameModel.round = raceTimeValue;

    this.tryRacingGameStart();
  }

  handleGameRetry(event) {
    event.preventDefault();

    this.#racingGameModel.init();
    this.#racingGameView.init();
  }

  tryRacingGameStart() {
    const { round, carList } = this.#racingGameModel;
    if (isGameSetup(round, carList.length) === false) {
      return false;
    }

    this.startRacingGame();
  }

  startRacingGame() {
    const { carList } = this.#racingGameModel;

    this.#racingGameView.renderCarContainer(carList);
    this.#racingGameView.setRenderProgress(true);

    this.startRace();
  }

  async startRace() {
    let startTime = new Date().getTime();
    let isRaceStop = false;

    while (isRaceStop === false) {
      await runAnimation();
      const currentTime = new Date().getTime();
      const percent = getTimeDiffToPercent(startTime, currentTime, GAME_SETTING.ROUND_INTERVAL);

      this.#racingGameView.setProgressPercent(percent);
      if (currentTime - GAME_SETTING.ROUND_INTERVAL >= startTime) {
        startTime = new Date().getTime();
        isRaceStop = this.getRacePlayResult();
      }
    }
  }

  getRacePlayResult() {
    const { isGameOver, carList } = this.#racingGameModel.play();

    this.#racingGameView.renderCarAdvance(carList);
    if (isGameOver === true) {
      this.getWinnersResult();
    }
    return isGameOver;
  }

  async getWinnersResult() {
    this.#racingGameView.setRenderProgress(false);
    this.#racingGameView.renderWinners(this.#racingGameModel.winners);

    await setDelay(GAME_SETTING.WINNER_MESSAGE_INTERVAL);
    alert(RESULT_MESSAGE.RACING_GAME_WINNERS);
    this.#racingGameView.renderRetryButton();
  }
}
