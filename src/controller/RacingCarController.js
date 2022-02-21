import RacingCar from '../model/RacingCar.js';
import RacingCarView from '../view/RacingCarView.js';

import { convertToNumber } from '../util/index.js';
import { DELAY } from '../constants/index.js';

class RacingCarController {
  constructor() {
    this.model = new RacingCar();
    this.view = new RacingCarView();

    this.#setEventHandler();
  }

  #setEventHandler() {
    this.view.setCarNameFormSubmitEvent(this.handleCarNameFormSubmitEvent.bind(this));
    this.view.setRacingCountFormSubmitEvent(this.handleRacingCountFormSubmitEvent.bind(this));
    this.view.setRestartButtonClickEvent(this.handleRestartBtnClickEvent.bind(this));
  }

  handleCarNameFormSubmitEvent(carNames) {
    const carNameList =
      carNames === '' ? null : carNames.split(',').map((carName) => carName.trim());

    try {
      this.model.setCarList(carNameList);
    } catch (error) {
      this.view.resetCarNamesInput();
      alert(error.message);
      return;
    }

    this.view.deactivateCarNamesForm();
    this.view.showRacingCountForm();
  }

  handleRacingCountFormSubmitEvent(racingCount) {
    const _racingCount = racingCount === '' ? null : convertToNumber(racingCount);

    try {
      this.model.setRacingCount(_racingCount);
    } catch (error) {
      this.view.resetRacingCountInput();
      alert(error.message);
      return;
    }

    this.view.deactivateRacingCountForm();
    const carNameList = this.model.getCarNameList();
    this.view.renderRacingCarList(carNameList);
    this.#playRacingGame();
  }

  handleRestartBtnClickEvent() {
    this.model.resetStatus();
    this.view.resetElement();
    this.view.activateCarNamesForm();
    this.view.activateRacingCountForm();
    this.view.hideElement();
  }

  #playRacingGame() {
    const racingCount = this.model.getRacingCount();
    let gameTurn = 0;

    const raceTimer = setInterval(() => {
      this.#playRace();

      gameTurn = gameTurn + 1;

      if (gameTurn === racingCount) {
        clearInterval(raceTimer);
        this.view.hideLoadingSpinner();
        this.#endRacingGame();
      }
    }, DELAY.RACE_TIME);
  }

  #playRace() {
    const movedRacingCarList = this.model.tryMoveRacingCarList();
    this.view.renderRacingCarProgress(movedRacingCarList);
  }

  #endRacingGame() {
    this.#handleGameResult();
    this.view.showFinalWinner();
    this.view.showRestartSection();
    this.view.showCongratulationMessage();
  }

  #handleGameResult() {
    const maxDistance = this.model.getMaxDistance();
    const winnerList = this.model.getWinnerList(maxDistance);
    const finalWinner = winnerList.join(', ');
    this.view.renderFinalWinnerResult(finalWinner);
  }
}

export default RacingCarController;
