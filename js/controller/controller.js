import { $, $$ } from '../utils/dom.js';
import Model from '../model/model.js';
import View from '../view/view.js';
import { validator } from '../validator/validator.js';
import { ERROR_MESSAGE, NUMBER, SELECTOR } from '../utils/constants.js';
import { input } from '../view/input.js';
import { delay } from '../utils/helper.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    $(SELECTOR.CAR_NAMES_FORM).addEventListener('submit', this.carNamesInputSubmitHandler);
    $(SELECTOR.CAR_RACING_COUNT_FORM).addEventListener(
      'submit',
      this.racingCountInputSubmitHandler
    );
    $(SELECTOR.GAME_RESTART).addEventListener('click', this.gameRestartHandler);
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

  async playGame() {
    for (let i = 0; i < Number(this.model.racingCount); i++) {
      await delay(1000);
      this.calaulateCarProgress();
      this.view.renderCarProgress(this.model.carPosition);
      this.view.renderLoader();
    }

    this.view.hideLoader();
    this.view.renderWinner(this.getWinnerList());
    this.view.renderRestartButton();

    await delay(2000);
    this.displayCongratulatoryMessage();
  }

  calaulateCarProgress() {
    this.model.carNames.forEach((carNames, idx) => {
      this.model.goForward(idx);
    });
  }

  gameStart() {
    this.view.renderCarNames(this.model.carNames);
    this.view.renderInitialLoader(this.model.carPosition);
    this.playGame();
  }

  displayCongratulatoryMessage() {
    alert(`축하합니다! 우승자는 ${this.getWinnerList()}입니다.`);
  }

  getWinnerList() {
    const maxDistance = Math.max(...this.model.carPosition);
    return this.model.carNames
      .filter((car, idx) => this.model.carPosition[idx] === maxDistance)
      .join(', ');
  }
}
