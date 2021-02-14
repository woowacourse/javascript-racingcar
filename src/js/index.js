import View from "./View/View.js";
import Controller from "./Controller/Controller.js";

const $app = document.getElementById("app");

View.renderInitialElements($app);
Controller.initializeEvents();
