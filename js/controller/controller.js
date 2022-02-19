import { $, $$ } from '../utils/dom.js';
import Model from '../model/model.js';
import View from '../view/view.js';
import { validator } from '../validator/validator.js';
import { ERROR_MESSAGE, NUMBER, SELECTOR } from '../utils/constants.js';
import { input } from '../view/input.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.bindCarNamesInputSubmitEvent();
    this.bindRacingCountInputSubmitEvent();
  }

  bindCarNamesInputSubmitEvent() {
    $(SELECTOR.CAR_NAMES_FORM).addEventListener('submit', (e) => {
      e.preventDefault();
      const carNamesInput = input.getCarNamesInput();

      if (validator.isInvalidCarNamesInput(carNamesInput)) {
        alert(ERROR_MESSAGE.INVALID_NAME_LENGTH);
        return;
      }

      this.view.disableCarNamesForm();
      this.model.saveCars(carNamesInput);
      this.model.initCarPosition();
      this.view.renderRacingCountForm();
    });
  }

  bindRacingCountInputSubmitEvent() {
    $(SELECTOR.CAR_RACING_COUNT_FORM).addEventListener('submit', (e) => {
      e.preventDefault();
      const racingCountInput = input.getRacingCountInput();

      if (validator.isInvalidRacingCountInput(racingCountInput)) {
        alert(ERROR_MESSAGE.INVALID_RACING_COUNT);
        return;
      }

      this.view.disableRacingCountForm();
      this.model.saveRacingCount(racingCountInput);
      this.gameStart();
    });
  }

  setMoveStateByRacingCount() {
    for (let i = 1; i < Number(this.model.racingCount) + 1; i++) {
      this.displayProgressEverySecond(i);
    }
  }

  displayProgressEverySecond(i) {
    setTimeout(() => {
      this.setMoveState();
      this.displayProgress();
      this.view.renderLoader();
    }, 1000 * i);
  }

  setMoveState() {
    this.model.carNames.forEach((carNames, idx) => {
      this.model.goForward(idx);
    });
  }

  gameStart() {
    this.view.renderCarNames(this.model.carNames);
    this.view.renderInitialLoader(this.model.carPosition);
    this.setMoveStateByRacingCount();

    setTimeout(() => {
      this.view.hideLoader();
      this.displayWinner();
      this.displayRestartButton();
      this.bindGameRestartEvent();
      this.displayCongratulatoryMessage();
    }, 1000 * this.model.racingCount);
  }

  displayCongratulatoryMessage() {
    setTimeout(() => {
      alert(`축하합니다! 우승자는 ${this.getWinnerList()}입니다.`);
    }, 2000);
  }

  displayProgress() {
    this.view.renderCarProgress(this.model.carPosition);
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
