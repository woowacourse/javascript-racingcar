import RaceController from './service/RaceService';

class App {
  async run() {
    const service = new RaceController();
    await service.start();
  }
}

export default App;
