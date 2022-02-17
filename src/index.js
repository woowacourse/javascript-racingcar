import RacingController from './controller/RacingController.js';
import RacingView from './view/RacingView.js';
import RacingGameModel from './model/RacingGameModel.js';

window.addEventListener('DOMContentLoaded', () => {
  const model = new RacingGameModel();
  const view = new RacingView(model);
  const controller = new RacingController(model, view);
  controller.app();
});
