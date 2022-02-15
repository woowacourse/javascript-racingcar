import RacingCarGameController from './controller/racing-car-game.controller.js';
import RacingCarGameModel from './model/racing-car-game.model.js';

window.addEventListener('DOMContentLoaded', () => {
  const model = new RacingCarGameModel();
  const controller = new RacingCarGameController(model);
  controller.init();
});
