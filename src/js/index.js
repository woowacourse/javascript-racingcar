import Model from './model/Model.js';
import View from './view/View.js';
import Controller from './controller/Controller.js';
import templete from './template/template.js';

const view = new View(templete);
const model = new Model();
const controller = new Controller(model, view);

controller.init();
