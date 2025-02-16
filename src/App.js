import GameController from './controller/GameController.js';

class App {
  async run() {
    const gameController = new GameController();
    await gameController.run();
  }
}

export default App;
