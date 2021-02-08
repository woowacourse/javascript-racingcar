import { handleCarNamesSubmit } from "./controller/carController.js";

class App {
  constructor() {
    document.querySelector("#car-names-submit").addEventListener("click", handleCarNamesSubmit);
  }
}

new App();