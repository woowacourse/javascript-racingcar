import RacingGame from './controller/RacingGame';

class App {
  async init() {
    await RacingGame.prototype.play();
    return this;
  }
}

export default App;
