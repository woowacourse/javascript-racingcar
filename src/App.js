import RacingGame from './controller/RacingGame';

const App = {
  async init() {
    await RacingGame.play();
  },
};

export default App;
