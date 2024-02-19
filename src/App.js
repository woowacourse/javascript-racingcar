import RacingCarGame from "./domain/RacingCarGame.js";

class App {
  async play() {
    const racingCarGame = new RacingCarGame();
    racingCarGame.play();
  }
}

export default App;
