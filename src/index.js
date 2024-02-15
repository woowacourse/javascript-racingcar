import RaceController from "./RaceController.js";

class App {
  async play() {
    new RaceController().race();
  }
}
export default App;
