import RacingCarView from './racingCarView.js';

export default class RacingCarController {
  constructor() {
    this.view = new RacingCarView();

    this.init();
  }

  init() {
    this.view.renderHeader();
    this.view.renderGameSetting();
  }
}
