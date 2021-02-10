import {
  handleCarNamesSubmit,
  handleCountSubmit,
} from "./controller/carController.js";
import { handleRestartButton } from "./controller/winnerController.js";

class App {
  constructor() {
    this.cars = [];
    document.querySelector("#count-container").style.display = "none";
    document.querySelector("#racing-container").style.display = "none";
    document.querySelector("#winner-container").style.display = "none";

    document
      .querySelector("#car-names-submit")
      .addEventListener("click", handleCarNamesSubmit);
    document
      .querySelector("#count-submit")
      .addEventListener("click", handleCountSubmit);
    document.querySelector('#restart-button').addEventListener('click', handleRestartButton);
  }
}

export const app = new App();
