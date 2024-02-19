import { Game } from './controller/index.js';

class App {
  game = new Game();

  async play() {
    await this.game.setGame();
    this.game.play();
  }
}

export default App;
