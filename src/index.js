import Game from './controllers/Game.js';

const start = async () => {
  const game = new Game();
  await game.start();
};

start();
