import CarManager from "./controller/carManager/CarManager.js";
import UserManager from "./controller/racingCount/UserManager.js";

import { $ } from "./view/getElement.js";
import { makeInitialView } from "./view/viewControl.js";

class RacingCar {
  constructor() {
    this.carManager = new CarManager();
    this.racingCount = new UserManager(this.carManager);
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
      this.racingCount.init();
    });
  }
}

new RacingCar();
