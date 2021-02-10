import View from "./View.js";
import Controller from "./Controller.js";

const $app = document.getElementById("app");

View.initialRender($app);

document.getElementById("name-submit-button").addEventListener("click", Controller.onNameSubmit);
