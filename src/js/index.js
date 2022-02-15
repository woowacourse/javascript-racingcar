import Model from './model/Model.js';
import View from './view/View.js';
import Controller from './controller/Controller.js';

const view = new View();
const model = new Model();
const controller = new Controller(model, view);

controller.init();
