const CarRacingGame = require('./controller/CarRacingGame');

class App {
  play() {
    const carGame = new CarRacingGame();
    carGame.play();
  }
}

const app = new App();
app.play();

module.exports = App;
