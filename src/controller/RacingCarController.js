import RacingCar from '../model/RacingCar.js';
import RacingCarView from '../view/RacingCarView.js';

import { DELAY, RULES, SELECTOR } from '../constants/index.js';
import { convertToNumber } from '../util/index.js';

class RacingCarController {
  constructor() {
    this.model = new RacingCar();
    this.view = new RacingCarView();
    this.init();
  }

  init() {
    this.initDOM();
    this.initEventListener();
  }

  initDOM() {
    this.$carNamesForm = document.getElementById(SELECTOR.CAR_NAMES_FORM);
    this.$carNamesInput = document.getElementById(SELECTOR.CAR_NAMES_INPUT);
    this.$racingCountForm = document.getElementById(SELECTOR.RACING_COUNT_FORM);
    this.$racingCountInput = document.getElementById(SELECTOR.RACING_COUNT_INPUT);
    this.$restartBtn = document.getElementById(SELECTOR.RESTART_BUTTON);
  }

  initEventListener() {
    this.$carNamesForm.addEventListener('submit', this.handleCarNameFormSubmitEvent.bind(this));
    this.$racingCountForm.addEventListener(
      'submit',
      this.handleRacingCountFormSubmitEvent.bind(this)
    );
    this.$restartBtn.addEventListener('click', this.handleRestartBtnClickEvent.bind(this));
  }

  handleCarNameFormSubmitEvent(e) {
    e.preventDefault();
    const carNames = this.$carNamesInput.value;
    const carNameList =
      carNames === ''
        ? null
        : carNames.split(RULES.CAR_NAME_SEPERATOR).map((carName) => carName.trim());

    try {
      this.model.setCarList(carNameList);
      this.view.deactivateCarNamesForm();
      this.view.showRacingCountForm();
    } catch (error) {
      this.view.resetCarNamesInput();
      alert(error.message);
    }
  }

  handleRacingCountFormSubmitEvent(e) {
    e.preventDefault();
    const _racingCount = this.$racingCountInput.value;
    const racingCount = _racingCount === '' ? null : convertToNumber(_racingCount);

    try {
      this.model.setRacingCount(racingCount);
      this.view.deactivateRacingCountForm();
      const carNameList = this.model.getCarNameList();
      this.view.renderRacingCarList(carNameList);
      this.playRacingGame();
    } catch (error) {
      this.view.resetRacingCountInput();
      alert(error.message);
    }
  }

  playRacingGame() {
    const racingCount = this.model.getRacingCount();
    let gameTurn = 0;

    const raceTimer = setInterval(() => {
      this.playRace();

      gameTurn = gameTurn + 1;

      if (gameTurn === racingCount) {
        clearInterval(raceTimer);
        this.view.hideLoadingSpinner();
        this.endRacingGame();
      }
    }, DELAY.RACE_TIME);
  }

  playRace() {
    const movedRacingCarList = this.model.tryMoveRacingCarList();
    this.view.renderRacingCarProgress(movedRacingCarList);
  }

  endRacingGame() {
    this.handleGameResult();
    this.view.showFinalWinner();
    this.view.showRestartSection();
    this.view.showCongratulationMessage();
  }

  handleGameResult() {
    const maxDistance = this.model.getMaxDistance();
    const winnerList = this.model.getWinnerList(maxDistance);
    const finalWinner = winnerList.join(RULES.WINNER_LIST_SEPERATOR);
    this.view.renderFinalWinnerResult(finalWinner);
  }

  handleRestartBtnClickEvent() {
    this.model.resetStatus();
    this.view.resetElement();
    this.view.activateCarNamesForm();
    this.view.activateRacingCountForm();
    this.view.hideElement();
  }
}

export default RacingCarController;
