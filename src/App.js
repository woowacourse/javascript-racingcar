const Controller = require('./controller/Controller');

class App {
  start() {
    new Controller().play();
  }
}

const app = new App();
app.start();
