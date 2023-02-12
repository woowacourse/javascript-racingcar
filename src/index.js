const Controller = require("./Controller/Controller");

class App {
  play() {
    new Controller();
  }
}

const app = new App();
app.play();

module.exports = App;
