const Console = require('./Console');
const { GAME_NUMBER } = require('../constants');

class Random {
  static getCarGameNumber = () => {
    return Math.random() * GAME_NUMBER.moveRange;
  };
}

const errorHandler = (validate, input) => {
  try {
    validate(input);
    return true;
  } catch ({ message }) {
    Console.print(message);
    return false;
  }
};

module.exports = { errorHandler, Random };
