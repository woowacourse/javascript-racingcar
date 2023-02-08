const Inputs = require('../views/Inputs');
const Car = require('../validator/Car');

class Game {
  async play() {
    const name = await Inputs.readCarName();
    const count = await Inputs.readTryCount();
  }
}

module.exports = Game;
