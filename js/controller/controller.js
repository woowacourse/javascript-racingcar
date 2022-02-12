import { $, $$ } from '../utils/dom.js';
import Model from '../model/model.js';
import View from '../view/view.js';
import { getRandomNumber } from '../utils/getRandomNumber.js';
import Validator from '../validator/validator.js';
import { NUMBER, SELECTOR } from '../utils/constants.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.bindCarNamesEvent();
    this.bindRacingCountEvent();
  }

  bindCarNamesEvent() {
    $(SELECTOR.CAR_NAMES_FORM).addEventListener('submit', (e) => {
      e.preventDefault();
      const carNamesInput = $(SELECTOR.CAR_NAMES_INPUT)
        .value.split(',')
        .map((carName) => carName.trim());

      if (Validator.isInValidCarNamesInput(carNamesInput)) {
        return;
      }

      this.model.saveCars(carNamesInput);
      this.model.initCarPosition();
      this.view.renderCarRacingInputBox();
    });
  }

  bindRacingCountEvent() {
    $(SELECTOR.CAR_RACING_COUNT_FORM).addEventListener('submit', (e) => {
      e.preventDefault();
      const carRacingCountInput = $(SELECTOR.CAR_RACING_COUNT_INPUT).value;

      if (Validator.isInValidRacingCountInput(carRacingCountInput)) {
        return;
      }

      this.model.saveRacingCount(carRacingCountInput);
      this.gameStart();
      this.model.initCarPosition();
    });
  }

  setMoveStateByRacingCount() {
    for (let i = 0; i < this.model.racingCount; i++) {
      this.setMoveState();
    }
  }

  isMoveCondition() {
    return getRandomNumber() >= NUMBER.MOVE_CONDITION;
  }

  goForward(idx) {
    if (this.isMoveCondition()) {
      this.model.carPosition[idx]++;
    }
  }

  setMoveState() {
    this.model.carNames.forEach((carNames, idx) => {
      this.goForward(idx);
    });
  }

  gameStart() {
    this.view.renderCarNames(this.model.carNames);
    this.setMoveStateByRacingCount();
    this.displayProgress();
    this.displayWinner();
    this.displayRestartButton();
    this.bindGameRestartEvent();
  }

  displayProgress() {
    this.view.renderProgress(this.model.carPosition);
  }

  displayRestartButton() {
    this.view.renderRestartButton();
  }

  getWinnerList() {
    const maxDistance = Math.max(...this.model.carPosition);
    return this.model.carNames
      .filter((car, idx) => this.model.carPosition[idx] === maxDistance)
      .join(', ');
  }

  displayWinner() {
    this.view.renderWinner(this.getWinnerList());
  }

  bindGameRestartEvent() {
    $(SELECTOR.GAME_RESTART).addEventListener('click', (e) => {
      this.view.renderInitial();
      this.model = new Model();
    });
  }
}
