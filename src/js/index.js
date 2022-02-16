import Cars from "./controller/cars/Cars.js";
import Game from "./controller/game/Game.js";
import { makeInitialView } from "./view/commonView.js";
import { restartButton } from "./util/elements.js";

class RacingCar {
  constructor() {
    this.cars = new Cars();
    this.game = new Game(this.cars);
    makeInitialView();
    this.addRestartEvent();
  }

  addRestartEvent() {
    restartButton.addEventListener("click", () => {
      makeInitialView();
      this.cars.init();
      this.game.init();
    });
  }
}

new RacingCar();
