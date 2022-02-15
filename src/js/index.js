import Model from './model/Model.js';
import View from './view/View.js';
import Controller from './controller/Controller.js';
import template from './template/template.js';

const view = new View(template);
const model = new Model();
const controller = new Controller(model, view);

controller.init();
