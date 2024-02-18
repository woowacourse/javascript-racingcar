import RacingGameController from './controller/RacingGameController.js';

const App = {
  async start() {
    await RacingGameController.run();
  },
};

export default App;
