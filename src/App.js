import { Game } from './controllers/index.js';

class App {
  game = new Game();

  async play() {
    await this.game.setGame();

    this.game.play();
    this.game.getGameResult();
  }
}

export default App;
