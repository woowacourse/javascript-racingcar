import RacingCarGameModel from './model/RacingCarGameModel.js';
import RacingCarGameView from './view/RacingCarGameView.js';
import RacingCarGameController from './controller/RacingCarGameController.js';
import template from './template/template.js';
import { SELECTOR } from './configs/dom.js';
import { $ } from './utils/utils.js';

const view = new RacingCarGameView($(SELECTOR.$APP), template);
const model = new RacingCarGameModel();
const controller = new RacingCarGameController(model, view);

controller.init();
