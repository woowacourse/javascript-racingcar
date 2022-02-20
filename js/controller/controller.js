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
    $(SELECTOR.CAR_NAMES_FORM).addEventListener('submit', this.carNamesInputSubmitHandler);
    $(SELECTOR.CAR_RACING_COUNT_FORM).addEventListener(
      'submit',
      this.racingCountInputSubmitHandler
    );
  }

  carNamesInputSubmitHandler = (e) => {
    e.preventDefault();
    const carNamesInput = input.getCarNamesInput();

    if (validator.isInvalidCarNamesInput(carNamesInput)) {
      alert(ERROR_MESSAGE.INVALID_NAME_LENGTH);
      return;
    }

    this.view.disableCarNamesForm(true);
    this.model.saveCars(carNamesInput);
    this.model.initCarPosition();
    this.view.renderRacingCountForm();
  };

  racingCountInputSubmitHandler = (e) => {
    e.preventDefault();
    const racingCountInput = input.getRacingCountInput();

    if (validator.isInvalidRacingCountInput(racingCountInput)) {
      alert(ERROR_MESSAGE.INVALID_RACING_COUNT);
      return;
    }

    this.view.disableRacingCountForm(true);
    this.model.saveRacingCount(racingCountInput);
    this.gameStart();
  };

  gameRestartHandler = () => {
    this.view.renderInitial();
    this.model = new Model();
  };

  displayCarProgressByRacingCount() {
    for (let i = 1; i <= Number(this.model.racingCount); i++) {
      this.displayCarProgressAfterSeconds(i);
    }
  }

  displayCarProgressAfterSeconds(i) {
    setTimeout(() => {
      this.calaulateCarProgress();
      this.view.renderCarProgress(this.model.carPosition);
      this.view.renderLoader();
    }, 1000 * i);
  }

  calaulateCarProgress() {
    this.model.carNames.forEach((carNames, idx) => {
      this.model.goForward(idx);
    });
  }

  gameStart() {
    this.view.renderCarNames(this.model.carNames);
    this.view.renderInitialLoader(this.model.carPosition);
    this.displayCarProgressByRacingCount();

    setTimeout(() => {
      this.view.hideLoader();
      this.view.renderWinner(this.getWinnerList());
      this.view.renderRestartButton();
      $(SELECTOR.GAME_RESTART).addEventListener('click', this.gameRestartHandler);
      this.displayCongratulatoryMessage();
    }, 1000 * Number(this.model.racingCount));
  }

  displayCongratulatoryMessage() {
    setTimeout(() => {
      alert(`축하합니다! 우승자는 ${this.getWinnerList()}입니다.`);
    }, 2000);
  }

  getWinnerList() {
    const maxDistance = Math.max(...this.model.carPosition);
    return this.model.carNames
      .filter((car, idx) => this.model.carPosition[idx] === maxDistance)
      .join(', ');
  }
}
