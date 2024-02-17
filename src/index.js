import RaceController from "./controller/RaceController.js";

class App {
  async play() {
    new RaceController().race();
  }
}
new App().play();
export default App;
