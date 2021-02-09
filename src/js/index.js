import { handleCarNamesSubmit } from "./controller/carController.js";

class App {
  constructor() {
    this.cars = [];
    document.querySelector("#count-container").style.display = "none";
    document.querySelector("#winner-container").style.display = "none";
    document.querySelector("#racing-container").style.display = "none";

    document
      .querySelector("#car-names-submit")
      .addEventListener("click", handleCarNamesSubmit);
  }
}

export const app = new App();
