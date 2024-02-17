import Controller from "./Controller.js";

class App {
  async play() {
    new Controller().start();
  }
}
export default App;

new App().play();
