const CarGame = require('./controller/CarGame');

class App {
  start() {
    new CarGame().play();
  }
}

const app = new App();
app.start();
