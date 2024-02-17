import RacingGameController from './controller/RacingGameController.js';

const App = Object.freeze({
  async start() {
    await RacingGameController.run();
  },
});

export default App;
