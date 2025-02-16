import RacingcarManager from './domain/RacingcarManager.js'

class App {
  async run() {
    const racingcarManager = new RacingcarManager();
    await racingcarManager.start();
  }
}

export default App;
