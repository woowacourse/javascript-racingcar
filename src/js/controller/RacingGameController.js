import { RacingGameView } from '../view/index.js';

export default class RacingGameController {
  constructor() {
    this.view = new RacingGameView();
    this.init();
  }

  init() {
    this.view.renderInitialView();
  }
}
