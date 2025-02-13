import Game from './controllers/Game.js';

class Index {
  async start() {
    const game = new Game();
    await game.start();
  }
}

const index = new Index();
index.start();
