import Game from './controllers/Game.js';

class Index {
  start() {
    console.log('실행됨');
    const game = new Game();
    game.start();
  }
}

const index = new Index();
index.start();
