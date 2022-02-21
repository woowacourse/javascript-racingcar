import RacingController from './controller/RacingController.js';
import RacingView from './view/RacingView/index.js';
import RacingModel from './model/RacingGame.js';

window.addEventListener('DOMContentLoaded', () => {
  const model = new RacingModel();
  const view = new RacingView(model);
  const controller = new RacingController(model, view);
  controller.init();
});
