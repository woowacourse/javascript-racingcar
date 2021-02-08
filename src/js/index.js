import { handleCarNamesSubmit } from "./controller/carController.js";

class App {
  constructor() {
    document.querySelector("#car-names-submit").addEventListener("click", handleCarNamesSubmit);
    document.querySelector("#racing-container").style.visibility = "hidden";
    document.querySelector("#winner-container").style.visibility = "hidden";
  }
}

new App();