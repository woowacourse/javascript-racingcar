import RacingGameController from './controller/RacingGameController.js';

const App = Object.freeze({
  async start() {
    await new RacingGameController().run();
  },
});

export default App;
