import Race from './domain/Race.js';

class App {
  async run() {
    const race = new Race();

    await race.play();
  }
}

export default App;
