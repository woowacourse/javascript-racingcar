const RacingGame = require('../models/RacingGame');
const Inputs = require('../views/Inputs');
const Car = require('../validator/Car');

class Game {
  async play() {
    // const name = await Inputs.readCarName();
    // const count = await Inputs.readTryCount();
    const r = new RacingGame(['sy', 'hi'], 5);
    const winners = r.getWinners();

    const a = winners.map(winner => winner.getName());
    console.log(a);
  }
}

module.exports = Game;
