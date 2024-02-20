import RacingController from "./controller/RacingController.js";

class App {
  async play() {
    const racingController = new RacingController();
    racingController.run();
  }
}

export default App;
