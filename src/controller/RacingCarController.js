import RacingCar from '../model/RacingCar.js';
import RacingCarView from '../view/RacingCarView.js';

import { getRacingCarItemTemplate } from '../template/index.js';
import { convertToNumber, delay, generateRandomNumber } from '../util/index.js';
import { ID, RULES } from '../constants/index.js';

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
    this.$carNamesForm = document.getElementById(ID.CAR_NAMES_FORM);
    this.$carNamesInput = document.getElementById(ID.CAR_NAMES_INPUT);
    this.$racingCountForm = document.getElementById(ID.RACING_COUNT_FORM);
    this.$racingCountInput = document.getElementById(ID.RACING_COUNT_INPUT);
    this.$restartBtn = document.getElementById(ID.RESTART_BTN);
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
    const carNamesList = carNames.split(RULES.CAR_NAME_SEPERATOR).map((carName) => carName.trim());

    try {
      this.model.setCarList(carNamesList);
      this.view.showRacingCountForm();
    } catch (error) {
      this.view.resetCarNamesInput();
      alert(error);
      return;
    }
  }

  handleRacingCountFormSubmitEvent(e) {
    e.preventDefault();
    const racingCount = convertToNumber(this.$racingCountInput.value);

    try {
      this.model.setRacingCount(racingCount);
      this.view.renderRacingCarList(this.getRacingCarListTemplate());
      this.startRacingGame();
    } catch (error) {
      this.view.resetRacingCountInput();
      alert(error);
      return;
    }
  }

  getRacingCarListTemplate() {
    const initializeValue = '';

    const racingCarItemsTemplate = this.model
      .getCarList()
      .reduce((result, car) => result + getRacingCarItemTemplate(car.getName()), initializeValue);

    return racingCarItemsTemplate;
  }

  async startRacingGame() {
    for (let i = 0; i < this.model.getRacingCount(); i = i + 1) {
      this.runOneCycleGame();
      await delay(RULES.WAITING_TIME);
    }

    this.handleGameResult();
    this.view.showFinalWinner();
    this.view.showRestartSection();
  }

  runOneCycleGame() {
    this.model.getCarList().forEach((car, index) => {
      const randomNumber = generateRandomNumber();

      if (randomNumber >= RULES.MOVE_CONDITION_NUMBER) {
        car.moveForward();
        this.view.renderRacingCarProgress(index);
      }
    });
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
    this.view.hideElement();
  }
}

export default RacingCarController;
