import RaceController from "./RaceController.js";

class App {
  async play() {
    new RaceController().race();
  }
}
new App().play();
export default App;
