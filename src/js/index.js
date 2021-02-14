import { $ } from './views/utils/querySelector.js';
import { setToInitialView } from './views/setToInitialView.js';
import { handleCarNameInput } from './handlers/handleCarNameInput.js';
import { handleRacingCountInput } from './handlers/handleRacingCountInput.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
  }

  init() {
    setToInitialView();
    this.addEventListeners();
  }

  addEventListeners() {
    $('#car-name-submit').addEventListener(
      'click',
      handleCarNameInput.bind(this),
    );
    $('#racing-count-submit').addEventListener(
      'click',
      handleRacingCountInput.bind(this),
    );
    $('#game-restart-button').addEventListener('click', setToInitialView);
  }
}

window.onload = () => {
  const racingGame = new RacingGame();

  racingGame.init();
};
