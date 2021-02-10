import View from "./View.js";
import Controller from "./Controller.js";

const $app = document.getElementById("app");

View.initialRender($app);
Controller.initializeEvents();
