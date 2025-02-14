import Race from "./domain/Race.js";
import InputHandler from "./input/InputHandler.js";

class App {
  async run() {
    const carNameList = await InputHandler.getCarNameList();
    const attemptCount = await InputHandler.getAttemptCount();
    new Race(carNameList, attemptCount).play();
  }
}

export default App;
