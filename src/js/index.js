import Model from './model/Model.js';
import View from './view/View.js';
import Controller from './controller/Controller.js';
import template from './template/template.js';
import { SELECTOR } from './configs/dom.js';
import { $ } from './utils/utils.js';

const view = new View($(SELECTOR.$APP), template);
const model = new Model();
const controller = new Controller(model, view);

controller.init();
