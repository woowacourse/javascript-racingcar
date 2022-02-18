import RacingGameModel from '../models/RacingGameModel.js';
import RacingGameView from '../views/RacingGameView.js';

import { SELECTOR } from '../constants/selector.js';
import GAME_SETTING from '../constants/RacingGame/setting.js';
import { RESULT_MESSAGE } from '../constants/message.js';
import { $ } from '../utils/element-tools.js';
import { nameStringToArray } from '../utils/data-manager.js';
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
    const { carList, round: gameRound } = this.#racingGameModel;

    this.#racingGameView.renderCarContainer(carList);
    this.#racingGameView.setVisibleProgress(true);

    const receState = {
      stage: 0,
      round: gameRound,
    };

    const raceTimer = setInterval(
      () => this.handleRaceTimer(raceTimer, receState),
      GAME_SETTING.ROUND_INTERVAL
    );
  }

  handleRaceTimer(timer, state) {
    state.stage += 1;

    const carPlayResult = this.#racingGameModel.play();
    this.#racingGameView.renderCarAdvance(carPlayResult);

    const { round, stage } = state;
    if (round === stage) {
      clearInterval(timer);
      setTimeout(() => {
        this.handleWinnersResult();
      }, GAME_SETTING.WINNER_MESSAGE_INTERVAL);
    }
  }

  handleWinnersResult() {
    this.#racingGameView.setVisibleProgress(false);
    this.#racingGameView.renderWinners(this.#racingGameModel.winners);
    alert(RESULT_MESSAGE.RACING_GAME_WINNERS);
  }
}
