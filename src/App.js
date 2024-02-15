import RaceController from './service/RaceService';

class App {
  async run() {
    const service = new RaceController();
    service.start();
  }
}

export default App;
