import MainController from './controllers/MainController.js';

class App {
  async run() {
    await new MainController().run();
  }
}

export default App;
