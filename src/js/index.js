import Cars from "./controller/carsName/Cars.js";
import RacingCount from "./controller/racingCount/RacingCount.js";
import { makeInitialView } from "./view/viewControl.js";
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
    logo.addEventListener("click", () => {
      makeInitialView();
    });
  }

  addRestartEvent() {
    restartButton.addEventListener("click", () => {
      makeInitialView();
      this.cars.init();
      this.racingCount.init();
    });
  }
}

new RacingCar();
