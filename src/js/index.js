import { $ } from './views/utils/querySelector.js';
import { setToInitialView } from './views/setToInitialView.js';
import { handleCarNameInput } from './handlers/handleCarNameInput.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
  }

  init() {
    setToInitialView();
    $('#car-name-submit').addEventListener('click', () =>
      handleCarNameInput(this.cars),
    );
    $('#game-restart-button').addEventListener('click', setToInitialView);
  }
}

window.onload = () => {
  new RacingGame().init();
};
