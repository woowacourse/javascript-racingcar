import RaceController from './service/RaceController';

class App {
  async run() {
    const service = new RaceController();

    service.start();
  }
}

export default App;
