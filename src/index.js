import { carNameInput, tryInput } from "./view/Input.js";
import Move from "./Move.js";
import Output from "./view/Output.js";
import RaceController from "./RaceController.js";

class App {
  async play() {
    new RaceController().race();
  }
}

new App().play();
