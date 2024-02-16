import RaceService from './service/RaceService';

class App {
  async run() {
    const service = new RaceService();
    await service.start();
  }
}

export default App;
