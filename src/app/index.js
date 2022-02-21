import { CAR_NAME_SEPARATOR, DELAY_AFTER_END, DOM, ID_PREFIX } from '../lib/constants.js';
import { findElement, splitString } from '../lib/utils.js';
import RacingCarGameManager from './manager.js';
import RacingCarGameView from './view.js';

class RacingCarGame {
  start() {
    this.#init();
  }

  #init() {
    this.view = new RacingCarGameView();
    this.modelManager = new RacingCarGameManager();
    this.#initDOM();
    this.#bindHandler();
  }

  #initDOM() {
    this.carNameInputField = findElement(ID_PREFIX, DOM.CAR_NAME_INPUT_FIELD);
    this.countInputField = findElement(ID_PREFIX, DOM.COUNT_INPUT_FIELD);
    this.restartButton = findElement(ID_PREFIX, DOM.RESTART_BTN);
  }

  #bindHandler() {
    this.carNameInputField.addEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.addEventListener('click', this.onCountInputFieldClick);
    this.restartButton.addEventListener('click', this.onRestartButtonClick);
  }

  onCarNameInputFieldClick = (e) => {
    e.preventDefault();
    const { target: carNameBtn, currentTarget: carNameInputField } = e;
    if (carNameBtn.id === DOM.CAR_NAME_BTN) {
      const { value: carNameValue } = carNameInputField.querySelector(DOM.CAR_NAME_INPUT.toID());
      this.triggerActionAfterCarNameInput(carNameValue);
    }
  };

  triggerActionAfterCarNameInput(carNameValue) {
    const names = splitString(carNameValue, CAR_NAME_SEPARATOR);
    this.modelManager.createCars(names);
    this.view.renderAfterCarSetting();
  }

  onCountInputFieldClick = (e) => {
    e.preventDefault();
    const { target: countBtn, currentTarget: countInputField } = e;
    if (countBtn.id === DOM.COUNT_BTN) {
      const { value: countValue } = countInputField.querySelector(DOM.COUNT_INPUT.toID());
      this.triggerActionAfterCountInput(countValue);
    }
  };

  async triggerActionAfterCountInput(count) {
    try {
      this.modelManager.createRoundCount(count);
      this.view.renderInitialGameState(this.modelManager.getCars());
      await this.simulateGame();

      const winners = this.modelManager.getWinners();
      this.view.renderResults(winners);
      this.afterRenderComplete(winners);
    } catch (error) {
      alert(error.message);
    }
  }

  async simulateGame() {
    const count = this.modelManager.getCount();
    for (let i = 1; i <= count; i += 1) {
      await this.simulateRound();
    }
  }

  async simulateRound() {
    await this.view.renderLoadingAboutRound();

    const results = this.modelManager.goForwardCars();
    this.view.renderGoForwardCars(results);
  }

  afterRenderComplete(winners) {
    this.view.disableInputForms();
    this.carNameInputField.removeEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.removeEventListener('click', this.onCountInputFieldClick);

    setTimeout(() => {
      alert(`🎉🎉 축하합니다 ~~~~~ ${winners.join(',')} 님 🎉🎉`);
    }, DELAY_AFTER_END);
  }

  onRestartButtonClick = () => {
    this.#init();
  };
}
export default RacingCarGame;
