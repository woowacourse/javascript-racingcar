import CarManager from "./controller/carManager/CarManager.js";
import RacingCount from "./controller/racingCount/RacingCount.js";
import { makeInitialView } from "./view/viewControl.js";
import { $ } from "./view/getElement.js";

class RacingCar {
  constructor() {
    this.carManager = new CarManager();
    this.racingCount = new RacingCount(this.carManager);
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
