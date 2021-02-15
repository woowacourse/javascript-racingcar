import View from "./View/View.js";
import Controller from "./Controller/Controller.js";
import { $ } from "./Manager/domManager.js";

View.renderInitialElements($("app"));
Controller.initializeEvents();
