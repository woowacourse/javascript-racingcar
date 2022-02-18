import CarManager from "./controller/CarManager.js";
import GameManager from "./controller/GameManager.js";
import UserManager from "./controller/UserManager.js";

import { initializeView } from "./view/initialView.js";

class RacingCar {
  constructor() {
    this.carManager = new CarManager();
    this.gameManager = new GameManager();
    this.userManager = new UserManager(this.carManager, this.gameManager);
    initializeView();
  }
}

new RacingCar();
