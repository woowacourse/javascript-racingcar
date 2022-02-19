import RacingCar from '../model/RacingCar.js';
import RacingCarView from '../view/RacingCarView.js';

import { DELAY, RULES, SELECTOR } from '../constants/index.js';
import { getRacingCarItemTemplate } from '../template/index.js';
import { convertToNumber, pickRandomNumber } from '../util/index.js';

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
    const carNameList = carNames.split(RULES.CAR_NAME_SEPERATOR).map((carName) => carName.trim());

    try {
      this.model.setCarList(carNameList);
      this.view.deactivateCarNamesForm();
      this.view.showRacingCountForm();
    } catch (error) {
      this.view.resetCarNamesInput();
      alert(error);
    }
  }

  handleRacingCountFormSubmitEvent(e) {
    e.preventDefault();
    const racingCount = convertToNumber(this.$racingCountInput.value);

    try {
      this.model.setRacingCount(racingCount);
      this.view.deactivateRacingCountForm();
      this.view.renderRacingCarList(this.getRacingCarListTemplate());
      this.playRacingGame();
    } catch (error) {
      this.view.resetRacingCountInput();
      alert(error);
    }
  }

  getRacingCarListTemplate() {
    const initValue = '';

    const racingCarItemsTemplate = this.model
      .getCarList()
      .reduce((result, car) => result + getRacingCarItemTemplate(car.getName()), initValue);

    return racingCarItemsTemplate;
  }

  playRacingGame() {
    const racingCount = this.model.getRacingCount();
    let count = 0;

    const raceTimer = setInterval(() => {
      this.playRace();

      count = count + 1;

      if (count === racingCount) {
        clearInterval(raceTimer);
        this.view.hideLoadingSpinner();
        this.endRacingGame();
      }
    }, DELAY.RACE_TIME);
  }

  playRace() {
    this.model.getCarList().forEach((car, index) => {
      const randomNumber = pickRandomNumber(RULES.RANDOM_MIN_NUMBER, RULES.RANDOM_MAX_NUMBER);

      if (randomNumber >= RULES.MOVE_CONDITION_NUMBER) {
        car.moveForward();
        this.view.renderRacingCarProgress(index);
      }
    });
  }

  endRacingGame() {
    this.handleGameResult();
    this.view.showFinalWinner();
    this.view.showRestartSection();
    this.view.showCongratsMessage();
  }

  handleGameResult() {
    const finalWinner = this.getFinalWinner();
    this.view.renderFinalWinnerResult(finalWinner);
  }

  getFinalWinner() {
    const maxDistance = this.getMaxDistance(this.model.getCarList());
    const winnerList = this.getWinnerList(maxDistance);

    return winnerList.join(RULES.WINNER_LIST_SEPERATOR);
  }

  getMaxDistance(carList) {
    return Math.max(...carList.map((car) => car.getDistance()));
  }

  getWinnerList(maxDistance) {
    return this.model
      .getCarList()
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
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
