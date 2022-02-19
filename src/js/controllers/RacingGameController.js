import RacingGameModel from '../models/RacingGameModel.js';
import RacingGameView from '../views/RacingGameView.js';

import { SELECTOR } from '../constants/selector.js';
import GAME_SETTING from '../constants/RacingGame/setting.js';
import { RESULT_MESSAGE } from '../constants/message.js';
import { MILLISECOND } from '../constants/constants.js';
import { $ } from '../utils/element-tools.js';
import { getTimeDiffToPercent, nameStringToArray } from '../utils/data-manager.js';
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

    this.playRacingGame();
  }

  playRacingGame() {
    const { carList } = this.#racingGameModel;

    this.#racingGameView.renderCarContainer(carList);
    this.#racingGameView.setRenderProgress(true);

    this.handleRaceInterval();
  }

  handleRaceInterval() {
    let startTime = new Date().getTime();
    const callback = () => {
      const currentTime = new Date().getTime();
      if (currentTime - 1000 > startTime) {
        startTime = new Date().getTime();
        const gamePlay = this.handleRacePlay();
        if (gamePlay === true) {
          return;
        }
      }

      const percent = getTimeDiffToPercent(startTime, currentTime, 1 * MILLISECOND);
      this.#racingGameView.setProgressPercent(percent);
      requestAnimationFrame(callback);
    };

    requestAnimationFrame(callback);
  }

  handleRacePlay() {
    const { isGameOver, carList } = this.#racingGameModel.play();
    this.#racingGameView.renderCarAdvance(carList);

    if (isGameOver === false) {
      return false;
    }

    this.handleWinnersResult();
    return true;
  }

  handleWinnersResult() {
    this.#racingGameView.setRenderProgress(false);
    this.#racingGameView.renderWinners(this.#racingGameModel.winners);

    setTimeout(() => {
      alert(RESULT_MESSAGE.RACING_GAME_WINNERS);
      this.#racingGameView.renderRetryButton();
    }, GAME_SETTING.WINNER_MESSAGE_INTERVAL);
  }
}
