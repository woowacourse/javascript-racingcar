import { carNameInput } from "./view/input.js";

class App {
  async play() {
    const car = await carNameInput();
    console.log(car);
  }
}

new App().play();
