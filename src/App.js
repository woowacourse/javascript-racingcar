const Controller = require('./controller/Controller');

class App {
  play() {
    const carGame = new Controller();
    carGame.play();
  }
}

const app = new App();
app.play();

module.exports = App;
