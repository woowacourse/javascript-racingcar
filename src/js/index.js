import { $ } from './util-view/querySelector.js';
import { setToInitialView } from './util-view/setToInitialView.js';
import { handleCarNameInput } from './handler/handleCarNameInput.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
  }

  init() {
    setToInitialView();
    $('#car-name-submit').addEventListener('click', () =>
      handleCarNameInput(this.cars),
    );
  }
}

window.onload = () => {
  new RacingGame().init();
};
