import RacingGameController from './controller/RacingGameController.js';

const App = {
  async start() {
    await new RacingGameController().run();
  },
};

export default App;
