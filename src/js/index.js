import Cars from "./controller/carsName/Cars.js";
import RacingCount from "./controller/racingCount/RacingCount.js";
import { makeInitialView } from "./view/viewControl.js";
import { EVENT } from "./util/constants.js";
import { logo, restartButton } from "./util/elements.js";

class RacingCar {
  constructor() {
    this.cars = new Cars();
    this.racingCount = new RacingCount(this.cars);
    makeInitialView();
    RacingCar.addLogoClickEvent();
    this.addRestartEvent();
  }

  static addLogoClickEvent() {
    logo.addEventListener(EVENT.CLICK, () => {
      makeInitialView();
    });
  }

  addRestartEvent() {
    restartButton.addEventListener(EVENT.CLICK, () => {
      makeInitialView();
      this.cars.init();
      this.racingCount.init();
    });
  }
}

new RacingCar();
