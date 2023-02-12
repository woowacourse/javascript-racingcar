const App = require("./App");
const CarGame = require("./Domain/CarGame");

const app = new App(new CarGame());

app.play();
