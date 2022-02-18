import { CAR_NAME_SEPARATOR, DOM, ID_PREFIX } from '../lib/constants.js';
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
    try {
      const names = splitString(carNameValue, CAR_NAME_SEPARATOR);
      const cars = RacingCarGameManager.makeCars(names);
      this.modelManager.setCars(cars);
      this.view.renderAfterCarSetting();
    } catch (error) {
      alert(error);
    }
  }

  onCountInputFieldClick = (e) => {
    e.preventDefault();
    const { target: countBtn, currentTarget: countInputField } = e;
    if (countBtn.id === DOM.COUNT_BTN) {
      const { value: countValue } = countInputField.querySelector(DOM.COUNT_INPUT.toID());
      // 로직의 마지막이기 때문에 동기 처리 안함.
      this.triggerActionAfterCountInput(countValue);
    }
  };

  async triggerActionAfterCountInput(count) {
    try {
      this.modelManager.setCount(count);
      this.view.renderInitialGameState(this.modelManager.getCars());
      await this.simulateGame();

      const winners = this.modelManager.getWinners();
      this.view.renderResults(winners);
      this.afterRenderComplete(winners);
    } catch (error) {
      alert(error);
    }
  }

  // 1
  // async simulateGame() {
  //   const count = this.modelManager.getCount();
  //   for (let i = 1; i <= count; i += 1) {
  //     setTimeout(() => {
  //       this.view.renderLoadingAboutRound();
  //     }, 1000 * (i - 1));
  //     setTimeout(() => {
  //       this.simulateRound();
  //     }, 1000 * i);
  //   }
  //   await sleep(count);
  // }

  async simulateGame() {
    const count = this.modelManager.getCount();
    for (let i = 1; i <= count; i += 1) {
      await this.view.renderLoadingAboutRound();
      this.simulateRound();
    }
  }

  simulateRound() {
    const results = this.modelManager.goForwardCars();
    this.view.renderGoForwardCars(results);
  }

  afterRenderComplete(winners) {
    this.view.disableInputButtons();
    this.carNameInputField.removeEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.removeEventListener('click', this.onCountInputFieldClick);

    setTimeout(() => {
      alert(`🎉🎉 축하합니다 ~~~~~ ${winners.join(',')} 님 🎉🎉`);
    }, 2000);
  }

  onRestartButtonClick = () => {
    this.#init();
  };
}
export default RacingCarGame;
