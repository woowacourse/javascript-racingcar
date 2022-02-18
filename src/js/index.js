import CarManager from "./controller/CarManager.js";
import GameManager from "./controller/GameManager.js";
import UserManager from "./controller/UserManager.js";

import { $ } from "./view/getElement.js";
import { makeInitialView } from "./view/viewControl.js";

class RacingCar {
  constructor() {
    this.carManager = new CarManager();
    this.gameManager = new GameManager();
    this.userManager = new UserManager(this.carManager, this.gameManager);
    makeInitialView();
    this.addLogoClickEvent();
    this.addRestartEvent();
  }

  addLogoClickEvent() {
    $("logo").addEventListener("click", () => {
      makeInitialView();
    });
  }

  addRestartEvent() {
    $("restart-button").addEventListener("click", () => {
      makeInitialView();
      this.carManager.init();
    });
  }
}

new RacingCar();
